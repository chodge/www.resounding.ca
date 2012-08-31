(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.marionette', 'teams/tournament_application'], function(Marionette, app) {
    var Controller;
    return Controller = (function(_super) {

      __extends(Controller, _super);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.routes = {
        'Tournaments/Players/:id/edit': 'editPlayer',
        'Tournaments/Players/:id': 'showPlayer'
      };

      Controller.prototype.editPlayer = function(id) {
        return app.vent.trigger('edit:player', parseInt(id));
      };

      Controller.prototype.showPlayer = function(id) {
        return app.vent.trigger('show:player', parseInt(id));
      };

      return Controller;

    })(Marionette.AppRouter);
  });

}).call(this);
