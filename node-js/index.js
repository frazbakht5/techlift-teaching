const express = require('express')
var bodyParser = require('body-parser'); // npm i body-parser
const app = express()


/* app.get(route, func);
app.post(route, func);
app.put(route, func);
app.delete(route, func);
app.patch(route, func);
 */


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/home', function (req, res) {
	let resObject = {
		status: 200,
		data: "Hello world!"
	}
	res.send(resObject)
});

app.get('/dashboard', function (req, res) {
	let resObject = {
		status: 200,
		data: "This is my dashboard."
	}
	res.send(resObject)
});

app.post('/car', async function (req, res) {

	let bodyParams = req.body;

	console.log("Entrying following data in db:");
	// console.log(JSON.stringify(bodyParams));
	console.log(bodyParams);

	let resObject = {
		status: 201,
		data: "New Car added in db"
	}
	res.send(resObject)
});

app.listen(5000, () => {
	console.log(`Techlift app listening on port ${5000}`)
})