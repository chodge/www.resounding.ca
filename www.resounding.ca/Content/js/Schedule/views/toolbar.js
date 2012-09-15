(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'underscore', 'plugins/backbone.marionette', 'plugins/text!templates/scheduleViews.html'], function(app, _, Marionette, html) {
    'use strict';

    var $html, Toolbar, teamFilterItemHtml, toolbarHtml;
    $html = $(html);
    toolbarHtml = $html.find('#toolbar').html();
    teamFilterItemHtml = $html.find('#team-filter-item').html();
    return Toolbar = (function(_super) {

      __extends(Toolbar, _super);

      function Toolbar() {
        return Toolbar.__super__.constructor.apply(this, arguments);
      }

      Toolbar.prototype.template = _.template(toolbarHtml);

      Toolbar.prototype.events = {
        'click a.view': 'viewChange',
        'click a.team-filter': 'teamFilter'
      };

      Toolbar.prototype.render = function() {
        var _this = this;
        Toolbar.__super__.render.apply(this, arguments);
        return $.ajax('/Tournaments/api/Teams/Basic/All').done(function(teams) {
          var teamsHtml;
          teamsHtml = _.reduce(teams, function(memo, team) {
            return memo += _.template(teamFilterItemHtml, team);
          }, '');
          return _this.$('ul.teams').html(teamsHtml);
        });
      };

      Toolbar.prototype.viewChange = function(e) {
        var $this, view;
        $this = $(e.currentTarget);
        this.$('li').removeClass('active');
        $this.parent().addClass('active');
        view = $this.text();
        return app.vent.trigger('change:view', view);
      };

      Toolbar.prototype.teamFilter = function(e) {
        var $this, id;
        $this = $(e.currentTarget);
        this.$('.current-team-filter').text($this.text());
        id = parseInt($this.attr('data-id')) || null;
        if (id < 0) {
          id = null;
        }
        return app.vent.trigger('filter:team', id);
      };

      return Toolbar;

    })(Marionette.ItemView);
  });

}).call(this);
