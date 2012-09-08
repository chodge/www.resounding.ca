(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'plugins/backbone.marionette'], function(app, Marionette) {
    'use strict';

    var WeekView;
    WeekView = (function(_super) {

      __extends(WeekView, _super);

      function WeekView() {
        return WeekView.__super__.constructor.apply(this, arguments);
      }

      WeekView.prototype.initialize = function(options) {
        return $(options.container).html('').append($('<h1>This is a calendar</h1>'));
      };

      return WeekView;

    })(Marionette.ItemView);
    return {
      WeekView: WeekView
    };
  });

}).call(this);
