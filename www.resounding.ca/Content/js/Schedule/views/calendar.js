(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'underscore', 'backbone', 'plugins/backbone.marionette', 'plugins/text!templates/scheduleViews.html', 'fullcalendar'], function(app, _, Backbone, Marionette, html) {
    'use strict';

    var CalendarView, DayView, MonthView, WeekView;
    CalendarView = (function(_super) {

      __extends(CalendarView, _super);

      function CalendarView() {
        return CalendarView.__super__.constructor.apply(this, arguments);
      }

      CalendarView.prototype.className = 'calendar';

      CalendarView.prototype.initialize = function() {
        var render;
        render = _.bind(this.render, this, true);
        return this.on('show', render, this);
      };

      CalendarView.prototype.render = function(force) {
        var cal, opts,
          _this = this;
        if (force) {
          opts = {
            defaultView: this.format,
            events: this.collection.calendarEvents(),
            timeFormat: 'h:mm TT',
            viewDisplay: function() {
              return _this.collection.CalendarStartDate = view.start;
            }
          };
          cal = this.$el.fullCalendar(opts);
          if (this.collection.CalendarStartDate) {
            cal.data('fullCalendar').gotoDate(this.collection.CalendarStartDate);
            cal.data('fullCalendar').render();
          }
        }
        return this;
      };

      return CalendarView;

    })(Marionette.ItemView);
    DayView = (function(_super) {

      __extends(DayView, _super);

      function DayView() {
        return DayView.__super__.constructor.apply(this, arguments);
      }

      DayView.prototype.format = 'basicDay';

      return DayView;

    })(CalendarView);
    WeekView = (function(_super) {

      __extends(WeekView, _super);

      function WeekView() {
        return WeekView.__super__.constructor.apply(this, arguments);
      }

      WeekView.prototype.format = 'basicWeek';

      return WeekView;

    })(CalendarView);
    MonthView = (function(_super) {

      __extends(MonthView, _super);

      function MonthView() {
        return MonthView.__super__.constructor.apply(this, arguments);
      }

      MonthView.prototype.format = 'month';

      return MonthView;

    })(CalendarView);
    return {
      WeekView: WeekView,
      MonthView: MonthView,
      DayView: DayView
    };
  });

}).call(this);
