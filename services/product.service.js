const { productSchema } = require("../model")

let addProduct = (body) => {
    return productSchema.create(body)
}

let getProduct = () => {
    return productSchema.find().populate(["category", "subcategory"])
}

let findByIdAndDelete = (id) => {
    return productSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return productSchema.findByIdAndUpdate(id, body)
}

module.exports = { addProduct, getProduct, findByIdAndDelete, findByIdAndUpdate }