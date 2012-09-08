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

		initialize: ->
			app.vent.on 'filter:team', @filterSet, this

		filterSet: (team) ->
			if team
				@filterFn = (item) -> 
					item.get('Home').Id == team or item.get('Visitor').Id == team
			else
				@filterFn = null

			@trigger 'reset'
			@trigger 'filterSet', team

		filteredItems: (item, index) ->
			filter = if @filterFn then @filterFn else -> true
			@filter(filter)

		byDate: (date) ->
			requested = date.clone().clearTime()
			items = @filteredItems()
			_.reduce(items,
				(memo, item) ->
					if item.dateOnly().equals(requested) then memo.push(item)
					memo
			, [])


	Schedule = _.extend(app.module(),
		Collection: collection
		Model: model
	)

	