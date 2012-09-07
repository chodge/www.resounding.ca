define [
	'app',
	'underscore',
	'backbone'
], (app, _, Backbone) ->
	'use strict'	

	model = Backbone.Model.extend
		idAttribute: 'Id'
		parse: (resp) ->
			_.extend resp, 
				Date: Date.parse(resp.Date)
		dateOnly: -> @get('Date').clone().clearTime()

	collection = Backbone.Collection.extend
		url: '/Tournaments/api/Games'
		model: model
		byDate: (date) ->
			requested = date.clone().clearTime()
			@reduce(
				(memo, item) ->
					if item.dateOnly().equals(requested) then memo.push(item)
					memo
			, [])


	Schedule = _.extend(app.module(),
		Collection: collection
		Model: model
	)

	