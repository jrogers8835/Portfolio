const express		= require('express');

const app			= express();
const port 			= process.env.PORT || 8080;

app.listen(port, () => {
	console.log('We are live on ' + port);
});

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/home', function (req, res) {
	res.send(index.html);
});