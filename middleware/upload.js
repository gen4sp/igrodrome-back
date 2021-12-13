const path = require('path')
const multer = require('multer')
const fs = require('fs')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let fs = require('fs'),
            uploads_folder = './uploads',
            games_folder = './games'

        if (!fs.existsSync(uploads_folder)){
            fs.mkdirSync(uploads_folder);
        }
        if (!fs.existsSync(games_folder)){
            fs.mkdirSync(games_folder);
        }
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