define [
	'underscore',
	'plugins/backbone.marionette',
	'modules/schedule',
	'plugins/text!templates/scheduleViews.html'
], (_, Marionette, Schedule, html) ->
	'use strict'

	itemHtml = $(html).find('#schedule-list-item').html()
	listHtml = $(html).find('#schedule-list').html()

	class ListItem extends Marionette.ItemView
		template: _.template(itemHtml)

	class View extends Marionette.CollectionView
		
		itemView: ListItem

		template: _.template(listHtml)

		initialize: ->
			creating = !@collection
			if creating
				@collection = new Schedule.Collection

			@collection.on('reset', @render, this)

			if creating then @collection.fetch() else @render()