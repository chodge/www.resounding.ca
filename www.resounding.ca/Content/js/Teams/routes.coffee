define ->
	'use strict'

	(match) ->
		match 'Tournaments/teams', 'teams#index'

		match 'Tournaments/teams/:id', 'teams#edit'