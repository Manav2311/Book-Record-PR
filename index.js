const express = require('express');
const database = require('./config/database');
const bookrecordModel = require('./models/bookrecordSchema');
const port = 8081;
const app = express();

app.use(express.static("node_modules"));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	bookrecordModel.find({}).then((data) => {
		return res.render('index', {
			data
		})
	}).catch((err) => {
		console.log(err);
		return false;
	})
})
app.get('/deletebookData/:id', (req, res) => {
	let { id } = req.params;
	bookrecordModel.findByIdAndDelete(id).then((data) => {
		if (data) {
			console.log("Student Data  is deleted");
			return res.redirect('/')
		}
	}).catch((err) => {
		if (err) {
			console.log(err);
			return false;
		}
	})
})
app.post('/addbookData', (req, res) => {
	let editId  = req.body.editId;
	if (editId) {
		bookrecordModel.findByIdAndUpdate(editId, { ...req.body }).then((data) => {
			console.log("Student Data is Updated");
			return res.redirect('/')
		}).catch((err) => {
			console.log(err);
			return false;
		})
	}
	else {
		bookrecordModel.create({ ...req.body }).then((data) => {
			console.log("Student Data is Added");
			return res.redirect('/')
		}).catch((err) => {
			console.log(err);
			return false;
		})
	}
})

app.get('/editbookData/:id', (req, res) => {

	let { id } = req.params;
	bookrecordModel.findById(id).then((data) => {
		console.log("data Edited of book ",data.title);
		return res.render('edit', { data })
	}).catch((err) => {
		console.log(err);
		return false;
	})

})

app.listen(port, (err) => {
	if (!err) {
		database;
		console.log("Server is started on http://localhost:" + port);
	}
	else console.log("Srever is not started !!!");
})