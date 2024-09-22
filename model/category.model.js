let mongoose = require("mongoose")

let categorySchema = new mongoose.Schema({
    category_Name: {
        type: String,
        required: true
    }
})

let category = mongoose.model("categorySchema", categorySchema)

module.exports = category