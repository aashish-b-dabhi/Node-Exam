let mongoose = require("mongoose")

let subcategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema"
    },
    subcategory: {
        type: String,
        required: true
    }
})

let subcategory = mongoose.model("subcategorySchema", subcategorySchema)

module.exports = subcategory