(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'teams/tournament_application'], function(Marionette, app) {
    'use strict';

    var View;
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.el = '#roles';

      View.prototype.events = {
        'click button': 'click'
      };

      View.prototype.click = function(e) {
        var role;
        $($(e.currentTarget).attr('data-target')).removeClass('hide').addClass('in');
        role = $(e.currentTarget).attr('data-role');
        return app.vent.trigger('change:role', role);
      };

      return View;

    })(Backbone.View);
  });

}).call(this);
