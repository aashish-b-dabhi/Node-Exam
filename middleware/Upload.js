const multer = require("multer");
let fs = require("fs");
let path = require("path");

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(
            null,
            file.originalname + "-" + parseInt(Math.random() * 10000) + ".png"
        );
    },
});

const upload = multer({ storage: storage });

module.exports = upload;