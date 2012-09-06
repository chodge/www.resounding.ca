define [
	'app',
	'backbone'
], (app, Backbone) ->
	'use strict'	

	model = Backbone.Model.extend
		idAttribute: 'Id'

	collection = Backbone.Collection.extend
		url: '/Tournaments/api/Games'
		model: model

	Schedule = _.extend(app.module(),
		Collection: collection
		Model: model
	)

	