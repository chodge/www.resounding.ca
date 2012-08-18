(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone.marionette', 'text!teams/templates/teamViews.html'], function(_, Marionette, html) {
    'use strict';

    var View, tmplHtml;
    tmplHtml = $(html).find('#player-detail').html();
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.template = _.template(tmplHtml);

      View.prototype.initialize = function() {
        View.__super__.initialize.apply(this, arguments);
        return this.render();
      };

      return View;

    })(Marionette.ItemView);
  });

}).call(this);
