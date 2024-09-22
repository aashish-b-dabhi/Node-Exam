const { userService } = require("../services")
let jwt = require("jsonwebtoken")

let register = async (req, res) => {
    try {

        let body = req.body

        let user = await userService.addUser(body)

        res.status(201).json({
            message: "user register successfully",
            user
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let login = async (req, res) => {
    try {

        let { email, password } = req.body

        let result = await userService.findByUser(email)

        if (!result) {
            throw new Error("invalid Email")
        }

        if (result.password !== password) {
            throw new Error("invalid Password")
        }

        let token = jwt.sign({ result }, "gaurang", { expiresIn: 1000 * 60 * 60 * 24 })

        res.status(200).json({
            message: "login success",
            result,
            token
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getUser = async (req, res) => {
    try {

        let result = await userService.getUser()

        res.status(200).json({
            message: "All user get success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { register, login, getUser }