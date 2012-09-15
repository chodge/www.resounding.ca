(function() {

  require(['app', 'backbone', 'views/view_selector', 'views/toolbar'], function(app, Backbone, ViewSelector, Toolbar) {
    app.addInitializer(function() {
      app.addRegions({
        main: '#main',
        toolbar: '#filter'
      });
      new ViewSelector(app.main.el);
      return app.toolbar.show(new Toolbar);
    });
    return app.start();
  });

}).call(this);
