(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'underscore', 'plugins/backbone.marionette', 'modules/schedule', 'plugins/text!templates/scheduleViews.html', 'datejs'], function(app, _, Marionette, Schedule, html) {
    'use strict';

    var ListItem, View, itemHtml;
    itemHtml = $(html).find('#schedule-list-item').html();
    ListItem = (function(_super) {

      __extends(ListItem, _super);

      function ListItem() {
        return ListItem.__super__.constructor.apply(this, arguments);
      }

      ListItem.prototype.template = _.template(itemHtml);

      ListItem.prototype.render = function() {
        var date, gamesOnDate;
        ListItem.__super__.render.apply(this, arguments);
        date = this.model.dateOnly();
        gamesOnDate = this.model.collection.byDate(date);
        if (_.indexOf(gamesOnDate, this.model) !== 0) {
          return this.$('.date').addClass('subsequent');
        }
      };

      return ListItem;

    })(Marionette.ItemView);
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.itemView = ListItem;

      View.prototype.tagName = 'ul';

      View.prototype.className = 'schedule container-fluid';

      View.prototype.initialize = function(options) {
        var creating;
        creating = !this.collection;
        if (creating) {
          this.collection = new Schedule.Collection;
        }
        this.collection.on('reset', this.render, this);
        this.collection.on('filterSet', this.showTeamFilter, this);
        if (options.container) {
          $(options.container).html('').append(this.el);
        }
        if (creating) {
          return this.collection.fetch();
        } else {
          return this.render();
        }
      };

      View.prototype.showCollection = function() {
        var ItemView, items,
          _this = this;
        ItemView = this.getItemView();
        items = this.collection.filteredItems();
        return _.each(items, function(item, index) {
          return _this.addItemView(item, ItemView, index);
        });
      };

      View.prototype.showTeamFilter = function(team) {
        var item, name;
        item = this.collection.filteredItems()[0];
        if (!item) {
          return;
        }
        return name = team ? item.get('Home').Id === team ? item.get('Home').Name : item.get('Visitor').Name : 'All Teams';
      };

      return View;

    })(Marionette.CollectionView);
  });

}).call(this);
