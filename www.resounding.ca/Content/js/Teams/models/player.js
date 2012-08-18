(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    'use strict';

    var Player;
    return Player = (function(_super) {

      __extends(Player, _super);

      function Player() {
        return Player.__super__.constructor.apply(this, arguments);
      }

      Player.prototype.idAttribute = 'Id';

      return Player;

    })(Backbone.Model);
  });

}).call(this);
