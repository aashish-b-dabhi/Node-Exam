let express = require("express")
const { subcategoryController } = require("../controller")
let route = express.Router()

route.post("/add", subcategoryController.addSubcategory)
route.get("/view", subcategoryController.getsubCategory)
route.delete("/delete/:id", subcategoryController.deleteSubcategory)
route.put("/update/:id", subcategoryController.updatesubCategory)

module.exports = route