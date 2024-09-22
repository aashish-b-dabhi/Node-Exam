const { subcategorySchema } = require("../model")

let addSubcategory = (body) => {
    return subcategorySchema.create(body)
}

let duplicateAdd = (subcategory) => {
    return subcategorySchema.findOne({ subcategory })
}

let getsubCategory = () => {
    return subcategorySchema.find().populate("category")
}

let findByIdAndDelete = (id) => {
    return subcategorySchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return subcategorySchema.findByIdAndUpdate(id, body)
}


module.exports = { addSubcategory, duplicateAdd, getsubCategory, findByIdAndDelete, findByIdAndUpdate }