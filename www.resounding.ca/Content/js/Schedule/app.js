(function() {

  define(['jquery', 'underscore', 'backbone', 'plugins/backbone.marionette'], function($, _, Backbone, Marionette) {
    'use strict';

    var app;
    return app = _.extend(new Marionette.Application, {
      root: '/',
      module: function(additionalProps) {
        return _.extend({
          Views: {}
        }, additionalProps);
      }
    });
  });

}).call(this);
