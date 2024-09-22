const { categoryService } = require("../services")

let addCategory = async (req, res) => {
    try {

        let body = req.body

        let duplicate = await categoryService.duplicateCategory(body.category_Name)
        if (duplicate) {
            throw new Error("category already added")
        }

        let category = await categoryService.addCategory(body)

        res.status(201).json({
            message: "category added success",
            category
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getCategory = async (req, res) => {
    try {

        let result = await categoryService.getCategory()

        res.status(200).json({
            message: "category get success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let deleteCategory = async (req, res) => {
    try {

        let { id } = req.params

        let result = await categoryService.findByIdAndDelete(id)

        if (!result) {
            throw new Error("Category not found")
        }

        res.status(200).json({
            message: "category deleted success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let updateCategory = async (req, res) => {
    try {

        let body = req.body
        let { id } = req.params

        let newBody = {
            id,
            ...body
        }

        let result = await categoryService.findByIdAndUpdate(id, body)

        if (!result) {
            throw new Error("Category not found")
        }

        res.status(200).json({
            message: "category updated success",
            newBody
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addCategory, getCategory, deleteCategory, updateCategory }