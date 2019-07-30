const uuid = require('uuid')
const csvtojson = require('csvtojson')
// const fs = require('fs')
const path = require('path')

module.exports = (function() {
    function PostRepository() {}

    PostRepository.prototype.generateId = function() {
        uuid()
    }
    PostRepository.prototype.save = function() {
        // Saves to CSV
    }
    PostRepository.prototype.findAll = function() {
        return new Promise(function(resolve, reject) {
            // Reads from CSV
            csvtojson({
                noheader: true
            })
                .fromFile(path.join(__dirname, '../db', 'posts.csv'))
                .then(json => resolve(json))
                .catch(err => reject(err))
        })
    }

    return PostRepository
})()
