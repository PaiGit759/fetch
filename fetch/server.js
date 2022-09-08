const path = require('path')
const express = require("express")
const { upload } = require("./src/multerUpload")

// instantiate server and specify port
const app = express()
const PORT = 8080

// configure server
app.use(express.static(__dirname + '/src'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// load index.html when accessing localhost:8080
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'))
})

// upload server endpoint
app.post('/upload', upload.any('avatar'), async function (req, res, next) {
  // send debug data to server console log 
  console.log("\nFiles selected for upload:", req.files)
  // send debug data to browser console log
  res.status(200).send()
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})