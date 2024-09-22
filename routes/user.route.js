let express = require("express")
const { userController } = require("../controller")
const { verifyToken, isLogin } = require("../middleware/verifyToken")

let route = express.Router()

route.post("/register", userController.register)
route.post("/login", userController.login)
route.get("/alluser", verifyToken, userController.getUser)

module.exports = route