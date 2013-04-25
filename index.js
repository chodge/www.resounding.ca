var connect = require('connect'),
	app = connect()
	.use(connect.compress())
	.use(connect.static(__dirname + '/public'))
	.listen(80);