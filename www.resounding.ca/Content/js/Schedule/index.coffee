require.config(

	deps: ['main'],

	paths:
		libs: '/Content/js/libs',
		plugins: '/Content/js/plugins'

		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		datejs: '../libs/date'
	,

	shim: 
		underscore:
			exports: '_'
		,
		backbone: 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		,
		date:
			exports: 'Date'
);