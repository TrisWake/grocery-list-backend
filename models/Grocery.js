const {mongoose} = require('mongoose')

const grocerySchema = new mongoose.Schema({
    grocery:{
        type: String,
        required: true
    },
        purchased:{
            type: Boolean,
            default: false
    },
        date: {
            type: Date,
            default: Date.now
    }
})

module.exports = mongoose.model('grocery', grocerySchema)

