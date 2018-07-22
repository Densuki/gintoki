const mongoose = require('mongoose')

const Schema = mongoose.Schema

var userSchema = Schema({
    _id: { type: String, default: 'no id' },
    username: { type: String, default: 'no name' },
    sushi: { type: String, default: '0' },
    xp: { type: String, defaykt: '0' },
    levelGlobal: { type: String, default: '1' }
})

var user = mongoose.model('user', userSchema)

exports.user = user