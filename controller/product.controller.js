const { productService } = require("../services")
const uploadImage = require("../services/cloudnary.service")

let addProduct = async (req, res) => {
    try {

        let body = req.body
        let { path, originalname } = req.file

        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            image: cloud.url
        }

        let product = await productService.addProduct(newBody)

        res.status(201).json({
            message: "product added success",
            product
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getProduct = async (req, res) => {
    try {

        let result = await productService.getProduct()

        res.status(200).json({
            message: "product get Success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let deleteProduct = async (req, res) => {
    try {

        let { id } = req.params

        let result = await productService.findByIdAndDelete(id)

        if (!result) {
            throw new Error("Product not found")
        }

        res.status(200).json({
            message: "Product deleted success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let updateProduct = async (req, res) => {
    try {

        let body = req.body
        let { id } = req.params

        let newBody = {
            id,
            ...body
        }

        let result = await productService.findByIdAndUpdate(id, body)

        if (!result) {
            throw new Error("Product not found")
        }

        res.status(200).json({
            mesage: "Product updated success",
            newBody
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addProduct, getProduct, deleteProduct, updateProduct }