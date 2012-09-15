define [
	'app',
	'views/calendar',
	'views/schedule_list'
], (app, Calendar, ScheduleList) ->
	'use strict'

	class ViewSelector
	
		constructor: (@container) ->
			app.vent.on 'change:view', @viewChanged, this
			view = @viewChanged()
			return view
		
		viewChanged: (view) ->

			games = app.main.currentView?.collection

			switch (view or 'List').toLowerCase()
				when 'week' then view = new Calendar.WeekView(collection: games)

				else view = new ScheduleList(container: @container)
			
			app.main.show(view)