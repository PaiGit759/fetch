const multer = require("multer")

// configure multer to use original file name
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    // ensure that this folder already exists in your project directory
    cb(null, "uploads")
  },
  filename: (req, file, cb)=>{
    cb(null, file.originalname)
  }
})

exports.upload = multer({ storage: storage })