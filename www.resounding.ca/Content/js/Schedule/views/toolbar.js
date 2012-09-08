(function() {

  define(['app', 'backbone'], function(app, Backbone) {
    'use strict';

    var Toolbar;
    return Toolbar = Backbone.View.extend({
      el: '#filter',
      events: {
        'click a.view': 'viewChange',
        'click a.team-filter': 'teamFilter'
      },
      viewChange: function(e) {
        var $this, view;
        $this = $(e.currentTarget);
        this.$('li').removeClass('active');
        $this.parent().addClass('active');
        view = $this.text();
        return app.vent.trigger('change:view', view);
      },
      teamFilter: function(e) {
        var $this, id;
        $this = $(e.currentTarget);
        this.$('.current-team-filter').text($this.text());
        id = parseInt($this.attr('data-id')) || null;
        return app.vent.trigger('filter:team', id);
      }
    });
  });

}).call(this);
