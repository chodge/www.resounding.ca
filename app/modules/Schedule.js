define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Schedule = app.module();

  // Default model.
  Schedule.Model = Backbone.Model.extend({
  
  });

  // Default collection.
  Schedule.Collection = Backbone.Collection.extend({
    model: Schedule.Model
  });

  // Return the module for AMD compliance.
  return Schedule;

});
