(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'plugins/backbone.marionette', 'views/schedule_list'], function(app, Marionette, ScheduleList) {
    'use strict';

    var Controller;
    return Controller = (function(_super) {

      __extends(Controller, _super);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.routes = {
        '': 'index'
      };

      Controller.prototype.index = function() {
        return $('#main').html('').append(new ScheduleList().render().el);
      };

      return Controller;

    })(Marionette.AppRouter);
  });

}).call(this);
