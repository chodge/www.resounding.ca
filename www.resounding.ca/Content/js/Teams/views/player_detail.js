(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone.marionette', 'text!teams/templates/teamViews.html'], function(_, Marionette, html) {
    'use strict';

    var View, editHtml, readOnlyHtml;
    readOnlyHtml = $(html).find('#player-detail-readonly').html();
    editHtml = $(html).find('#player-detail-editable').html();
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.initialize = function() {
        var tmpl;
        View.__super__.initialize.apply(this, arguments);
        tmpl = this.model.get('Permissions').U ? editHtml : readOnlyHtml;
        this.template = _.template(tmpl);
        return this.render();
      };

      View.prototype.render = function() {
        var positionPlayers,
          _this = this;
        View.__super__.render.apply(this, arguments);
        if (this.model.get('Permissions').R) {
          this.$el.show();
        } else {
          this.$el.hide();
        }
        positionPlayers = this.model.collection.filter((function(player) {
          return player.get('Position') === _this.model.get('Position');
        }));
        if (_.indexOf(positionPlayers, this.model)) {
          this.$('.position').hide();
        }
        return this.$el.addClass('player');
      };

      return View;

    })(Marionette.ItemView);
  });

}).call(this);
