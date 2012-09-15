define [
	'app',
	'underscore',
	'backbone',	
	'plugins/backbone.marionette',
	'plugins/text!templates/scheduleViews.html',
	'fullcalendar'
], (app, _, Backbone, Marionette, html) ->
	'use strict'

	$html = $(html)
	dayTemplate = $html.find('#day-view').html()
	weekTemplate = $(html).find('#week-view').html()

	class DayView extends Marionette.ItemView

		tagName: 'li'

		template: _.template(dayTemplate)


	class WeekView extends Marionette.ItemView

		className: 'calendar'

		itemView: DayView

		initialize: ->
			@on('show', @render, this)

		render: ->
			debugger
			cal = @$el.fullCalendar(
				defaultView: 'basicWeek'
				events: _.map(@collection.filteredItems(), (game) ->
					date = game.get('Date')
					event =
						start: date
						end: date.addHours(2)
						title: game.get('Home').Name + ' vs ' + game.get('Visitor').Name
				)
			)
			this

	WeekView: WeekView