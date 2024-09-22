const { cartService } = require("../services")

let addCart = async (req, res) => {
    try {
        let body = req.body

        let cart = await cartService.addCart(body)

        res.status(201).json({
            message: "Product added to cart",
            cart
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getCart = async (req, res) => {
    try {

        let result = await cartService.getCart()

        res.status(200).json({
            message: "Cart get success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let deleteCart = async (req, res) => {
    try {
        let { id } = req.params

        let result = await cartService.findByIdAndDelete(id)

        if (!result) {
            throw new Error("Product not found")
        }

        res.status(200).json({
            message: "Cart delete success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let updateCart = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body

        let newBody = {
            id,
            ...body
        }

        let result = await cartService.findByIdAndUpdate(id, body)

        res.status(200).json({
            message: "Cart updated success",
            newBody
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addCart, getCart, deleteCart, updateCart }