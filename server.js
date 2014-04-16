var express = require('express'),
	app = express()
	.use(express.compress())
	.use(express.static(__dirname + '/public'))
	.use(express.urlencoded());

app.get('/app.manifest', function(req, res) {
	res.set('Content-Type', 'text/cache-manifest');
	res.sendfile(__dirname + '/app.manifest');
});

app.listen(process.env.port || 80);