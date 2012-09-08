(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'teams/tournament_application', 'text!teams/templates/teamViews.html'], function(Marionette, app, html) {
    'use strict';

    var View, msg;
    msg = $(html).find('#reset-data-success-message').html();
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.el = '#roles';

      View.prototype.role = 'public';

      View.prototype.events = {
        'click [data-role]': 'click',
        'click #roles .btn-danger': 'reset'
      };

      View.prototype.click = function(e) {
        var $this;
        this.$('li').removeClass('active');
        $this = $(e.currentTarget);
        $this.parent().addClass('active');
        $($this.attr('data-target')).removeClass('hide').addClass('in');
        this.role = $this.attr('data-role');
        return app.vent.trigger('change:role', this.role);
      };

      View.prototype.reset = function(e) {
        if (confirm('Are you sure you want to reset the data?')) {
          $('#roles li.open').removeClass('open');
          return $.post('/Tournaments/Teams/Reset').success(function() {
            $(msg).appendTo($('#messages'));
            return app.vent.trigger('change:role', this.role);
          });
        }
      };

      return View;

    })(Backbone.View);
  });

}).call(this);
