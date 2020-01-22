const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

/*
const multer = require('multer')
const upload = multer({
    dest: 'images',          // destination folder: 'images'
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {                     // cb -> callback function
        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('Please upload a PDF'))
        // }
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document.'))
        }

        cb(undefined, true)

        // cb(new Error('Please upload a PDF'))        // give error message, reject
        // cb(undefined, true)                         // no error, accept
        // cb(undefined, false)                        // no error, eject
    }
})

// 'upload' -> In Postman, req / Body / form-data / Key=upload & type=File / Select Files='image-file'
app.post('/upload', upload.single('upload'), (req, res) => {
    console.log(req.body)
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
})
*/

/*
const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware')
}

app.post('/upload', errorMiddleware, (req, res) => {
    console.log(req.body)
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
})
*/