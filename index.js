var nodemailer = require('nodemailer'),
	express = require('express'),
	app = express()
	.use(express.compress())
	.use(express.static(__dirname + '/public'))
	.use(express.urlencoded());

app.post('/work/email', function(req, res) {
	var mailOptions = {
    		from: 'Cliffe Hodgkinson <hodgkinson@gmail.com>',
	    	to: 'Cliffe Hodgkinson <cliffe@resounding.ca>',
	    	subject: 'Someone is interested in Resounding Work',
	    	text: 'Email: ' + req.body.address,

		},
		smtpTransport = nodemailer.createTransport("SMTP", {
	    	service: "Gmail",
	    	auth: {
	    		user: 'hodgkinson@gmail.com',
	    		pass: process.env.mailpass
	    	}
		});

	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log("Message sent: " + response.message);
	    }

    	smtpTransport.close(); // shut down the connection pool, no more messages
	});

	res.end();
});

app.listen(80);