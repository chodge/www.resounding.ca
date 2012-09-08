define [
	'app',
	'views/calendar',
	'views/schedule_list'
], (app, Calendar, ScheduleList) ->
	'use strict'

	class ViewSelector
	
		constructor: (@container) ->
			app.vent.on 'change:view', @viewChanged, this
			@viewChanged()
		
		viewChanged: (view) ->
			switch (view or 'List').toLowerCase()
				when 'week' then new Calendar.WeekView(container: @container)

				else new ScheduleList(container: @container)