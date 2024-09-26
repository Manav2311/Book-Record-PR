const mongoose = require('mongoose')

const bookrecordSchema = new mongoose.Schema({
	title:{
		type : String,
		required : true
	},
	price:{
		type : Number,
		required : true
	},
	authorName:{
		type : String,
		required : true
	},
	city:{
		type : String,
		required : true
	},
	pagesRange:{
		type : String,
		required : true
	},
	description:{
		type : String,
		required : true
	},
	language:{
		type : String,
		required : true
	}
})

const bookrecordModel = mongoose.model("bookRecTable",bookrecordSchema)

module.exports = bookrecordModel 
