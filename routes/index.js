let express = require("express")
let categoryRoute = require("./category.route")
let subcategoryRoute = require("./subcategory.route")
let productRoute = require("./product.route")
let cartRoute = require("./cart.route")
let userRoute = require("./user.route")
let routes = express.Router()

routes.use("/category", categoryRoute)
routes.use("/subcategory", subcategoryRoute)
routes.use("/product", productRoute)
routes.use("/cart", cartRoute)
routes.use("/user", userRoute)

module.exports = routes