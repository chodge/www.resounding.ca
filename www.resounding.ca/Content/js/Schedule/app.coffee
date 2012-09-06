define [
	'jquery',
	'underscore',
	'backbone',
	'plugins/backbone.marionette'
], ($, _, Backbone, Marionette) ->
	'use strict'

	app = _.extend new Marionette.Application,
		root: '/'
		module: (additionalProps) ->
			_.extend Views: {}, additionalProps