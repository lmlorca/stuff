const express = require('express')
const app = express()
const controller = require('./dependency-injection')

app.use(express.json())

app.get('/posts', async (req, res) => {
    res.status(200).json(await controller.getPosts())
})

app.post('/posts', async (req, res) => {
    await controller.createPost({ req, res })
})

app.listen(7000, () => console.log('Server running at port 7000'))
