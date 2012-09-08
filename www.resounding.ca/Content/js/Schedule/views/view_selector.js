(function() {

  define(['app', 'views/calendar', 'views/schedule_list'], function(app, Calendar, ScheduleList) {
    'use strict';

    var ViewSelector;
    return ViewSelector = (function() {

      function ViewSelector(container) {
        this.container = container;
        app.vent.on('change:view', this.viewChanged, this);
        this.viewChanged();
      }

      ViewSelector.prototype.viewChanged = function(view) {
        switch ((view || 'List').toLowerCase()) {
          case 'week':
            return new Calendar.WeekView({
              container: this.container
            });
          default:
            return new ScheduleList({
              container: this.container
            });
        }
      };

      return ViewSelector;

    })();
  });

}).call(this);
