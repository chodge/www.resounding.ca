(function() {

  define(['backbone', 'backbone.marionette'], function(Backbone, Marionette) {
    'use strict';

    var app;
    window.TournamentApp = app = new Marionette.Application;
    require(['teams/controllers/team_controller', 'teams/views/teams_list', 'teams/views/role_selector'], function(Router, ListView, RoleSelector) {
      return app.addInitializer(function(options) {
        new Router();
        Backbone.history.start();
        new ListView;
        return new RoleSelector;
      });
    });
    return app;
  });

}).call(this);
