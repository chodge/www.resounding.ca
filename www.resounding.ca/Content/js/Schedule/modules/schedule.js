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
      byDate: function(date) {
        var requested;
        requested = date.clone().clearTime();
        return this.reduce(function(memo, item) {
          if (item.dateOnly().equals(requested)) {
            memo.push(item);
          }
          return memo;
        }, []);
      }
    });
    return Schedule = _.extend(app.module(), {
      Collection: collection,
      Model: model
    });
  });

}).call(this);
