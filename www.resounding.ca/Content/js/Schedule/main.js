(function() {

  require(['app', 'backbone', 'views/view_selector', 'views/toolbar'], function(app, Backbone, ViewSelector, Toolbar) {
    app.addInitializer(function() {
      new ViewSelector('#main');
      return new Toolbar;
    });
    return app.start();
  });

}).call(this);
