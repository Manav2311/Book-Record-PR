const mongoose = require('mongoose')

mongoose.connect ('mongodb+srv://manav:1234@bookrecords.dhqo4.mongodb.net/')

const db = mongoose.connection

db.on('connected',(err)=>{

	if (err) {
		console.log("Database is notconnected")
		return false
	}
	console.log("Database is connected")
})

module.exports = db