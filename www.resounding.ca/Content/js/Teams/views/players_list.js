(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone.marionette', 'teams/views/player_detail'], function(_, Marionette, PlayerView) {
    'use strict';

    var View;
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.itemView = PlayerView;

      View.prototype.initialize = function() {
        var _ref;
        this.children = (_ref = this.children) != null ? _ref : [];
        View.__super__.initialize.apply(this, arguments);
        return this.render();
      };

      return View;

    })(Marionette.CollectionView);
  });

}).call(this);
