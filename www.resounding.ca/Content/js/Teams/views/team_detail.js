(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.marionette', 'teams/views/players_list', 'text!teams/templates/teamViews.html'], function(Marionette, PlayersList, html) {
    'use strict';

    var View, basicHtml, detailHtml;
    basicHtml = $(html).find('#team-basic').html();
    detailHtml = $(html).find('#team-detail').html();
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        var tmplHtml;
        this.setElement("#team-" + this.model.id);
        tmplHtml = this.model.canSeePlayerDetails() ? detailHtml : basicHtml;
        return this.template = _.template(tmplHtml);
      };

      View.prototype.render = function() {
        View.__super__.render.apply(this, arguments);
        return new PlayersList({
          collection: this.model.Players,
          el: this.$('.players')
        });
      };

      return View;

    })(Marionette.ItemView);
  });

}).call(this);
