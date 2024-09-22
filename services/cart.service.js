const { cartSchema } = require("../model")

let addCart = (body) => {
    return cartSchema.create(body)
}

let getCart = () => {
    return cartSchema.find().populate(["user", "product"])
}

let findByIdAndDelete = (id) => {
    return cartSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return cartSchema.findByIdAndUpdate(id, body)
}

module.exports = { addCart, getCart, findByIdAndDelete, findByIdAndUpdate }