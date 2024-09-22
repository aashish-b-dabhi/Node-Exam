const { subcategoryService } = require("../services")

let addSubcategory = async (req, res) => {
    try {

        let body = req.body

        let duplicate = await subcategoryService.duplicateAdd(body.subcategory)
        if (duplicate) {
            throw new Error("subcategory already added")
        }

        let result = await subcategoryService.addSubcategory(body)

        res.status(201).json({
            message: "subCategory added success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getsubCategory = async (req, res) => {
    try {

        let result = await subcategoryService.getsubCategory()

        res.status(200).json({
            message: "subCategory get success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let deleteSubcategory = async (req, res) => {
    try {

        let { id } = req.params

        let result = await subcategoryService.findByIdAndDelete(id)

        if (!result) {
            throw new Error("subCategory not found")
        }

        res.status(200).json({
            message: "subCategory deleted success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let updatesubCategory = async (req, res) => {
    try {

        let body = req.body
        let { id } = req.params

        let newBody = {
            id,
            ...body
        }

        let result = await subcategoryService.findByIdAndUpdate(id, body)

        if (!result) {
            throw new Error("Subcategory not found")
        }

        res.status(200).json({
            message: "subCategory updated success",
            newBody
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addSubcategory, getsubCategory, deleteSubcategory, updatesubCategory }