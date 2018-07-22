const mongoose = require('mongoose')

function connectDB (mongooseURI) {
    mongoose.connect(mongooseURI, { useNewUrlParser: true }, (err) => {
        if (err) return console.error(err);
        console.log("[DATABASE] Connected!");
    })
}

exports.connectDB = connectDB