(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone.marionette', 'teams/tournament_application', 'text!teams/templates/teamViews.html'], function(_, Marionette, app, html) {
    'use strict';

    var EditView, View, basicHtml, detailHtml, editHtml;
    basicHtml = $(html).find('#player-basic').html();
    detailHtml = $(html).find('#player-detail').html();
    editHtml = $(html).find('#player-edit').html();
    View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.events = {
        'click .delete': 'onDeleteClick'
      };

      View.prototype.initialize = function() {
        var tmpl;
        app.vent.on('edit:player', this.onEdit, this);
        this.model.on('remove', this.onDelete, this);
        View.__super__.initialize.apply(this, arguments);
        this.$el.attr('id', 'player-' + this.model.id);
        tmpl = this.model.canSeeDetails() ? detailHtml : basicHtml;
        this.template = _.template(tmpl);
        return this.render();
      };

      View.prototype.render = function() {
        var positionPlayers,
          _this = this;
        View.__super__.render.apply(this, arguments);
        positionPlayers = this.model.collection.filter((function(player) {
          return player.get('Position') === _this.model.get('Position');
        }));
        if (_.indexOf(positionPlayers, this.model)) {
          this.$('.position').addClass('visible-phone');
        }
        this.$el.addClass('player container');
        if (this.model.canSeeDetails()) {
          this.$el.addClass('player-detail');
        }
        if (!this.model.get('Permissions').U) {
          this.$('.edit').remove();
        }
        if (!this.model.get('Permissions').D) {
          return this.$('.delete').remove();
        }
      };

      View.prototype.remove = function() {};

      View.prototype.onEdit = function(id) {
        if (id === this.model.id) {
          this.close();
          return new EditView({
            model: this.model,
            el: this.el
          });
        }
      };

      View.prototype.onDelete = function() {
        this.close();
        return this.$el.remove();
      };

      View.prototype.onDeleteClick = function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to remove this player?')) {
          return this.model.collection.remove(this.model);
        }
      };

      return View;

    })(Marionette.ItemView);
    EditView = (function(_super) {

      __extends(EditView, _super);

      function EditView() {
        return EditView.__super__.constructor.apply(this, arguments);
      }

      EditView.prototype.events = {
        'click .save': 'onSave'
      };

      EditView.prototype.ui = {
        $name: '[name=name]',
        $number: '[name=number]',
        $position: '[name=position]'
      };

      EditView.prototype.initialize = function() {
        this.model.on('change', this.showReadView, this);
        app.vent.on('show:player', this.onCancel, this);
        EditView.__super__.initialize.apply(this, arguments);
        this.template = _.template(editHtml);
        return this.render();
      };

      EditView.prototype.close = function() {};

      EditView.prototype.onSave = function() {
        return this.model.save({
          Name: this.ui.$name.val(),
          Number: this.ui.$number.val(),
          Position: this.ui.$position.val()
        });
      };

      EditView.prototype.render = function() {
        EditView.__super__.render.apply(this, arguments);
        return this.ui.$position.append($('<option></option>').attr('value', this.model.get('Position')).text(this.model.get('Position'))).val(this.model.get('Position'));
      };

      EditView.prototype.showReadView = function() {
        this.close();
        return new View({
          model: this.model,
          el: this.el
        });
      };

      EditView.prototype.onCancel = function(id) {
        if (id === this.model.id) {
          return this.showReadView();
        }
      };

      return EditView;

    })(Marionette.ItemView);
    return {
      ReadView: View,
      EditView: EditView
    };
  });

}).call(this);
