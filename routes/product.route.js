let express = require("express")
const { productController } = require("../controller")
const upload = require("../middleware/upload")

let route = express.Router()

route.post("/add", upload.single("image"), productController.addProduct)
route.get("/view", productController.getProduct)
route.delete("/delete/:id", productController.deleteProduct)
route.put("/update/:id", upload.single("image"), productController.updateProduct)

module.exports = route