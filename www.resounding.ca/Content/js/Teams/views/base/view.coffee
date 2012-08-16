define [
	'underscore',
	'chaplin'
], (_, Chaplin) ->
	'use strict'

	class TeamViewBase extends Chaplin.View

		getTemplateFunction: ->

			template = @template

			if typeof template is 'string'
				templateFunc = _.template(template)
				@constructor::template = templateFunc
			else
				templateFunc = template

			templateFunc