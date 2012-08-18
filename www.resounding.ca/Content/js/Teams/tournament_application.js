(function() {

  define(['backbone.marionette', 'teams/views/teams_list'], function(Marionette, ListView) {
    'use strict';

    var app;
    app = new Marionette.Application;
    app.addInitializer(function(options) {
      return new ListView;
    });
    return app;
  });

}).call(this);
