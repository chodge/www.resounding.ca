(function() {

  define(['app', 'backbone'], function(app, Backbone) {
    'use strict';

    var Schedule, collection, model;
    model = Backbone.Model.extend({
      idAttribute: 'Id'
    });
    collection = Backbone.Collection.extend({
      url: '/Tournaments/api/Games',
      model: model
    });
    return Schedule = _.extend(app.module(), {
      Collection: collection,
      Model: model
    });
  });

}).call(this);
