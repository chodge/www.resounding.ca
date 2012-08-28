(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'teams/models/team'], function(Backbone, Team) {
    'use strict';

    var Teams;
    return Teams = (function(_super) {

      __extends(Teams, _super);

      function Teams() {
        return Teams.__super__.constructor.apply(this, arguments);
      }

      Teams.prototype.model = Team;

      Teams.prototype.initialize = function() {
        this.Role = 'public';
        return this.fetch();
      };

      Teams.prototype.url = function() {
        return '/Tournaments/api/teams?role=' + this.Role;
      };

      return Teams;

    })(Backbone.Collection);
  });

}).call(this);
