const path = require('path')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if(file.mimetype === 'application/x-zip-compressed' || file.mimetype === 'application/zip'){
            callback(null, true)
        }else{
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 25
    }
})

module.exports = upload