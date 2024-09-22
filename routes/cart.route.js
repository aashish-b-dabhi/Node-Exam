let express = require("express")
const { cartController } = require("../controller")

let route = express.Router()

route.post("/add", cartController.addCart)
route.get("/view", cartController.getCart)
route.delete("/delete/:id", cartController.deleteCart)
route.put("/update/:id", cartController.updateCart)

module.exports = route