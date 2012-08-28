(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'teams/models/players'], function(Backbone, PlayerCollection) {
    'use strict';

    var Team;
    return Team = (function(_super) {

      __extends(Team, _super);

      function Team() {
        return Team.__super__.constructor.apply(this, arguments);
      }

      Team.prototype.idAttribute = 'Id';

      Team.prototype.url = function() {
        if (isNew()) {
          return "/Tournaments/api/teams";
        } else {
          return "/Tournaments/api/teams/" + id;
        }
      };

      Team.prototype.parse = function() {
        var data, players, _ref;
        data = Team.__super__.parse.apply(this, arguments);
        players = (_ref = data != null ? data.Players : void 0) != null ? _ref : [];
        this.Players = new PlayerCollection(players);
        this.Permissions = data.Permissions;
        delete data.Players;
        delete data.Permissions;
        return data;
      };

      Team.prototype.canSeePlayers = function() {
        return this.Permissions.U || this.Players.any(function(player) {
          return player.get('Permissions').R;
        });
      };

      return Team;

    })(Backbone.Model);
  });

}).call(this);
