const uuid = require('uuid')
const fs = require('fs')
const csvtojson = require('csvtojson')
const { parseAsync } = require('json2csv')
const path = require('path')

module.exports = (function() {
    function PostRepository() {
        ;(function() {
            const dbPath = path.join(__dirname, '../db')
            if (!fs.existsSync(dbPath)) {
                fs.mkdirSync(dbPath)
                fs.writeFileSync(
                    path.join(dbPath, 'posts.csv'),
                    `"id","text","title","createdOn"`
                )
            }
        })()
    }

    PostRepository.prototype.generateId = function() {
        return uuid()
    }
    PostRepository.prototype.save = function({ newPost }) {
        // Saves to CSV
        return new Promise(function(resolve, reject) {
            parseAsync(newPost, { header: false }).then(csv => {
                fs.appendFile(
                    path.join(__dirname, '../db', 'posts.csv'),
                    '\n' + csv,
                    err => {
                        if (err) console.log(err)
                        resolve(newPost)
                    }
                )
            })
        })
    }
    PostRepository.prototype.findAll = function() {
        return new Promise(function(resolve, reject) {
            // Reads from CSV
            csvtojson({
                noheader: false
            })
                .fromFile(path.join(__dirname, '../db', 'posts.csv'))
                .then(json => resolve(json))
                .catch(err => reject(err))
        })
    }
    PostRepository.prototype.findById = async function({ postId }) {
        const all = await this.findAll()

        return all.find(post => post.id == postId)
    }

    return PostRepository
})()
