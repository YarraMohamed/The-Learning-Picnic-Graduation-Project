const express = require("express")
const router = express.Router();
const userController = require("../controllers/user.controller")
const allowedTo = require("../middleware/allowedTo")
const userRoles = require("../utils/userRoles")
const verifyToken = require("../middleware/verifyToken")
const multer = require("multer");

const diskStorage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname
            cb(null, fileName)
        },

    }
)

const fileFilter = (req, file, cb) => {
    const imageFile = file.mimetype.split("/")[1];
    if (imageFile === 'jpeg' || imageFile === 'png') {
        return cb(null, true)
    }
    else
        return cb(appError.create('file must be image', 404, false))
}



const upload = multer({ storage: diskStorage, fileFilter })

router.route("/register")
    .post(verifyToken, allowedTo(userRoles.ADMIN), userController.register)

router.route("/login")
    .post(userController.login)

router.route("/:id")
    .get(verifyToken, allowedTo(userRoles.ADMIN), userController.viewAccount)
    .delete(verifyToken, allowedTo(userRoles.ADMIN), userController.deleteUser)
    .put(verifyToken, allowedTo(userRoles.ADMIN), userController.updateUser)

router.route("/")
    .get(verifyToken, allowedTo(userRoles.ADMIN), userController.getAllUser)

router.route("/parent/:id")
    .put(verifyToken, allowedTo(userRoles.ADMIN), userController.addChildEmail)

router.route("/profileImage")
    .post(upload.single('profileImage'), userController.uploadImage)

/* router.route("/logout")
    .post(userController.logout) */

module.exports = router;