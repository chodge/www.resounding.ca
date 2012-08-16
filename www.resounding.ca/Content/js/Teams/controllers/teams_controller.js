// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['chaplin', 'teams/models/teams', 'teams/models/team', 'teams/views/teams_list', 'teams/views/team_detail'], function(Chaplin, Teams, Team, TeamsListView, TeamDetailView) {
    'use strict';

    var TeamsController;
    return TeamsController = (function(_super) {

      __extends(TeamsController, _super);

      function TeamsController() {
        return TeamsController.__super__.constructor.apply(this, arguments);
      }

      TeamsController.prototype.title = 'Resounding Teams';

      TeamsController.prototype.historyURL = function(params) {
        if (params.id('Tournaments/teams/#{id}')) {

        } else {
          return 'Tournament/teams';
        }
      };

      TeamsController.prototype.initialize = function() {
        TeamsController.__super__.initialize.apply(this, arguments);
        return this.index();
      };

      TeamsController.prototype.index = function() {
        var teams;
        teams = new Teams();
        return this.view = new TeamsListView({
          collection: teams,
          render: false,
          renderItems: false
        });
      };

      TeamsController.prototype.edit = function(params) {
        debugger;
        var team;
        team = new Team(params.id);
        return this.view = new TeamDetailView({
          model: this.team
        });
      };

      return TeamsController;

    })(Chaplin.Controller);
  });

}).call(this);
