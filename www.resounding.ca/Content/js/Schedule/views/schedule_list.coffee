define [
	'app',
	'underscore',
	'plugins/backbone.marionette',
	'modules/schedule',
	'plugins/text!templates/scheduleViews.html',
	'datejs'
], (app, _, Marionette, Schedule, html) ->
	'use strict'

	itemHtml = $(html).find('#schedule-list-item').html()

	class ListItem extends Marionette.ItemView

		template: _.template(itemHtml)

		render: ->
			super
			date = @model.dateOnly()
			gamesOnDate = @model.collection.byDate(date)
			if _.indexOf(gamesOnDate, @model) != 0
				@$('.date').addClass 'subsequent'

	class View extends Marionette.CollectionView
		
		itemView: ListItem

		tagName: 'ul'

		className: 'schedule container-fluid'

		initialize: (options) ->
			
			creating = !@collection
			if creating
				@collection = new Schedule.Collection

			@collection.on 'reset', @render, this
			@collection.on 'filterSet', @showTeamFilter, this

			if options.container then $(options.container).html('').append(@el)

			if creating then @collection.fetch() else @render()

		showCollection: ->
			ItemView = @getItemView()
			items = @collection.filteredItems()
			_.each items, (item, index) =>
				@addItemView(item, ItemView, index)

		showTeamFilter: (team) ->
			item = @collection.filteredItems()[0]
			if not item then return

			name = 
			if team
				if item.get('Home').Id == team 
					item.get('Home').Name
				else
					item.get('Visitor').Name
			else
				'All Teams'