let mongoose = require("mongoose")

let cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productSchema"
    },
    qty: {
        type: Number,
        required: true
    }
})

let cart = mongoose.model("cartSchema", cartSchema)

module.exports = cart