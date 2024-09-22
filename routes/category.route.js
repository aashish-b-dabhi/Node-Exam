let express = require("express")
const { categoryController } = require("../controller")

let route = express.Router()

route.post("/add", categoryController.addCategory)
route.get("/view", categoryController.getCategory)
route.delete("/delete/:id", categoryController.deleteCategory)
route.put("/update/:id", categoryController.updateCategory)

module.exports = route
