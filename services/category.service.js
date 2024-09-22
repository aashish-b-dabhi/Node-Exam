const { categorySchema } = require("../model")

let addCategory = (body) => {
    return categorySchema.create(body)
}

let duplicateCategory = (category_Name) => {
    return categorySchema.findOne({ category_Name })
}

let getCategory = () => {
    return categorySchema.find()
}

let findByIdAndDelete = (id) => {
    return categorySchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return categorySchema.findByIdAndUpdate(id, body)
}

module.exports = { addCategory, getCategory, findByIdAndDelete, duplicateCategory, findByIdAndUpdate }