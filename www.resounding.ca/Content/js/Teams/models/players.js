(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'teams/models/player'], function(Backbone, Player) {
    'use strict';

    var Teams;
    return Teams = (function(_super) {

      __extends(Teams, _super);

      function Teams() {
        return Teams.__super__.constructor.apply(this, arguments);
      }

      Teams.prototype.model = Player;

      return Teams;

    })(Backbone.Collection);
  });

}).call(this);
