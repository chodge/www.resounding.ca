define [
	'underscore',
	'plugins/backbone.marionette',
	'modules/schedule',
	'plugins/text!templates/scheduleViews.html'
], (_, Marionette, Schedule, html) ->
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

		initialize: ->
			creating = !@collection
			if creating
				@collection = new Schedule.Collection

			@collection.on('reset', @render, this)

			if creating then @collection.fetch() else @render()