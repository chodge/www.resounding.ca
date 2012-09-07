(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'plugins/backbone.marionette', 'modules/schedule', 'plugins/text!templates/scheduleViews.html'], function(_, Marionette, Schedule, html) {
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

      View.prototype.initialize = function() {
        var creating;
        creating = !this.collection;
        if (creating) {
          this.collection = new Schedule.Collection;
        }
        this.collection.on('reset', this.render, this);
        if (creating) {
          return this.collection.fetch();
        } else {
          return this.render();
        }
      };

      return View;

    })(Marionette.CollectionView);
  });

}).call(this);
