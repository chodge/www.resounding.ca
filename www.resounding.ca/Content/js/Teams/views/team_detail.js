(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.marionette', 'teams/views/players_list', 'text!teams/templates/teamViews.html'], function(Marionette, PlayersList, html) {
    'use strict';

    var View, tmplHtml;
    tmplHtml = $(html).find('#team-detail').html();
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.template = _.template(tmplHtml);

      View.prototype.ui = {
        caret: '.caret'
      };

      View.prototype.initialize = function() {
        return this.setElement("#team-" + this.model.id);
      };

      View.prototype.render = function() {
        View.__super__.render.apply(this, arguments);
        new PlayersList({
          collection: this.model.Players,
          el: this.$('.players')
        });
        if (this.model.canSeePlayers()) {
          return this.ui.caret.show();
        } else {
          return this.ui.caret.hide();
        }
      };

      return View;

    })(Marionette.ItemView);
  });

}).call(this);
