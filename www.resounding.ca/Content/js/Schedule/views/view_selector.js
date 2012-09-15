(function() {

  define(['app', 'views/calendar', 'views/schedule_list'], function(app, Calendar, ScheduleList) {
    'use strict';

    var ViewSelector;
    return ViewSelector = (function() {

      function ViewSelector(container) {
        var view;
        this.container = container;
        app.vent.on('change:view', this.viewChanged, this);
        view = this.viewChanged();
        return view;
      }

      ViewSelector.prototype.viewChanged = function(view) {
        var games, _ref;
        games = (_ref = app.main.currentView) != null ? _ref.collection : void 0;
        switch ((view || 'List').toLowerCase()) {
          case 'week':
            view = new Calendar.WeekView({
              collection: games
            });
            break;
          default:
            view = new ScheduleList({
              container: this.container
            });
        }
        return app.main.show(view);
      };

      return ViewSelector;

    })();
  });

}).call(this);
