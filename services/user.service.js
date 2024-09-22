const { userSchema } = require("../model")

let addUser = (body) => {
    return userSchema.create(body)
}

let findByUser = (email) => {
    return userSchema.findOne({ email })
}

let getUser = () => {
    return userSchema.find()
}

module.exports = { addUser, findByUser, getUser }