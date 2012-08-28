(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.marionette', 'teams/models/teams', 'teams/views/team_detail'], function(Marionette, TeamCollection, DetailView) {
    'use strict';

    var View;
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.itemView = DetailView;

      View.prototype.initialize = function() {
        var _this = this;
        this.collection = new TeamCollection;
        this.setElement('#teams');
        this.bindTo(this.collection, 'reset', this.render);
        this.fetch();
        return window.TournamentApp.vent.on('change:role', function(role) {
          _this.collection.Role = role;
          return _this.fetch();
        });
      };

      View.prototype.closeChildren = function() {};

      View.prototype.fetch = function() {
        var _this = this;
        return this.collection.fetch({
          success: function() {
            return _this.collection.each(function(item) {
              return item.Players.trigger('reset');
            });
          }
        });
      };

      return View;

    })(Marionette.CollectionView);
  });

}).call(this);
