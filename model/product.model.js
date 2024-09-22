let mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategorySchema"
    },
    ProductName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

let product = mongoose.model("productSchema", productSchema)

module.exports = product