require.config(

	deps: ['main'],

	paths:
		libs: '/Content/js/libs',
		plugins: '/Content/js/plugins'

		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		datejs: '../libs/date',
		fullcalendar: '../plugins/fullcalendar'
	,

	shim: 
		underscore:
			exports: '_'
		,
		backbone: 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		,
		datejs:
			exports: 'Date'
		,
		fullcalendar:
			exports: '$.fn.fullCalendar'
);