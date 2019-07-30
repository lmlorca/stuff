const express = require('express')
const app = express()
const controller = require('./dependency-injection')

app.get('/posts', async (req, res) => {
    res.status(200).json(await controller.getPosts())
})

app.listen(7000, () => console.log('Server running at port 7000'))
