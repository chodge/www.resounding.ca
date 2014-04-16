var express = require('express'),
	compress = require('compression')(),
	app = express()
	.use(compress)
	.use(express.static(__dirname + '/public'));

app.get('/app.manifest', function(req, res) {
	res.set('Content-Type', 'text/cache-manifest');
	res.sendfile(__dirname + '/app.manifest');
});

app.listen(process.env.port || 80);

module.exports = app;