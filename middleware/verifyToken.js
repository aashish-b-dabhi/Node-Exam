let jwt = require("jsonwebtoken")

let verifyToken = (req, res, next) => {
    try {

        let token = req.headers["authorization"]

        if (!token) {
            throw new Error("You are not authorized")
        }

        var doneToken = token.split(" ")[1]
        jwt.verify(doneToken, "gaurang", (err, decoded) => {
            if (err) {
                throw new Error("Token is invalid")
            }
            req.user = decoded.user
            next()
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { verifyToken }