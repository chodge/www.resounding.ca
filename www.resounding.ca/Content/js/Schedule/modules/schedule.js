(function() {

  define(['app', 'underscore', 'backbone'], function(app, _, Backbone) {
    'use strict';

    var Schedule, collection, model;
    model = Backbone.Model.extend({
      idAttribute: 'Id',
      parse: function(resp) {
        return _.extend(resp, {
          Date: Date.parse(resp.Date)
        });
      },
      dateOnly: function() {
        return this.get('Date').clone().clearTime();
      }
    });
    collection = Backbone.Collection.extend({
      url: '/Tournaments/api/Games',
      model: model,
      initialize: function() {
        return app.vent.on('filter:team', this.filterSet, this);
      },
      filterSet: function(team) {
        if (team) {
          this.filterFn = function(item) {
            return item.get('Home').Id === team || item.get('Visitor').Id === team;
          };
        } else {
          this.filterFn = null;
        }
        this.trigger('reset');
        return this.trigger('filterSet', team);
      },
      filteredItems: function(item, index) {
        var filter;
        filter = this.filterFn ? this.filterFn : function() {
          return true;
        };
        return this.filter(filter);
      },
      byDate: function(date) {
        var items, requested;
        requested = date.clone().clearTime();
        items = this.filteredItems();
        return _.reduce(items, function(memo, item) {
          if (item.dateOnly().equals(requested)) {
            memo.push(item);
          }
          return memo;
        }, []);
      },
      calendarEvents: function() {
        return this.filteredItems().map(function(game) {
          var end, event, start;
          start = game.get('Date').clone();
          end = start.clone().addHours(2);
          return event = {
            allDay: false,
            start: start,
            end: end,
            title: "" + (game.get('Home').Name) + " vs " + (game.get('Visitor').Name)
          };
        });
      }
    });
    return Schedule = _.extend(app.module(), {
      Collection: collection,
      Model: model
    });
  });

}).call(this);
