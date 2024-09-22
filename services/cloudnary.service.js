const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dce1kz5g5",
    api_key: "571284557793288",
    api_secret: "f7qXpdTQY9Fe8RdSbgPCZu4cdVM"
})

let uploadImage = (path, originalname) => {
    return cloudinary.uploader.upload(
        path,
        { public_id: `${originalname}` },
        function (error, result) {
            return result;
        }
    );
};

module.exports = uploadImage;