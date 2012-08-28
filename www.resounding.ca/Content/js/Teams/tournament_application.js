(function() {

  define(['backbone.marionette', 'teams/views/teams_list', 'teams/views/role_selector'], function(Marionette, ListView, RoleSelector) {
    'use strict';

    var app;
    window.TournamentApp = app = new Marionette.Application;
    app.addInitializer(function(options) {
      new ListView;
      return new RoleSelector;
    });
    return app;
  });

}).call(this);
