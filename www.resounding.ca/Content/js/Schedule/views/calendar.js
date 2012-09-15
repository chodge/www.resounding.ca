(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'underscore', 'backbone', 'plugins/backbone.marionette', 'plugins/text!templates/scheduleViews.html', 'fullcalendar'], function(app, _, Backbone, Marionette, html) {
    'use strict';

    var $html, DayView, WeekView, dayTemplate, weekTemplate;
    $html = $(html);
    dayTemplate = $html.find('#day-view').html();
    weekTemplate = $(html).find('#week-view').html();
    DayView = (function(_super) {

      __extends(DayView, _super);

      function DayView() {
        return DayView.__super__.constructor.apply(this, arguments);
      }

      DayView.prototype.tagName = 'li';

      DayView.prototype.template = _.template(dayTemplate);

      return DayView;

    })(Marionette.ItemView);
    WeekView = (function(_super) {

      __extends(WeekView, _super);

      function WeekView() {
        return WeekView.__super__.constructor.apply(this, arguments);
      }

      WeekView.prototype.className = 'calendar';

      WeekView.prototype.itemView = DayView;

      WeekView.prototype.initialize = function() {
        return this.on('show', this.render, this);
      };

      WeekView.prototype.render = function() {
        debugger;
        var cal;
        cal = this.$el.fullCalendar({
          defaultView: 'basicWeek',
          events: _.map(this.collection.filteredItems(), function(game) {
            var date, event;
            date = game.get('Date');
            return event = {
              start: date,
              end: date.addHours(2),
              title: game.get('Home').Name + ' vs ' + game.get('Visitor').Name
            };
          })
        });
        return this;
      };

      return WeekView;

    })(Marionette.ItemView);
    return {
      WeekView: WeekView
    };
  });

}).call(this);
