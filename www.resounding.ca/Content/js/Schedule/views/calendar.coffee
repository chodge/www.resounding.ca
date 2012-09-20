define [
	'app',
	'underscore',
	'backbone',	
	'plugins/backbone.marionette',
	'plugins/text!templates/scheduleViews.html',
	'fullcalendar'
], (app, _, Backbone, Marionette, html) ->
	'use strict'

	class CalendarView extends Marionette.ItemView

		className: 'calendar'

		initialize: ->
			render = _.bind @render, this, true
			@on('show', render, this)
			
		render: (force) ->
			if force
				opts = 
					defaultView: @format
					events: @collection.calendarEvents()
					timeFormat: 'h:mm TT'
					viewDisplay: =>
						@collection.CalendarStartDate = view.start

				cal = @$el.fullCalendar opts

				if @collection.CalendarStartDate
					cal.data('fullCalendar').gotoDate(@collection.CalendarStartDate)
					cal.data('fullCalendar').render()
			
			this

	class DayView extends CalendarView

		format: 'basicDay'

	class WeekView extends CalendarView

		format: 'basicWeek'

	class MonthView extends CalendarView

		format: 'month'


	WeekView: WeekView
	MonthView: MonthView
	DayView: DayView