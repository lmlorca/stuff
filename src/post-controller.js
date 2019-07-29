const getPosts = require('./get-posts')
const addPost = require('./add-post')

exports.writePostToCSV = addPost(async function({ post }) {
    // Implementation
    // Write to CSV
})
exports.findAllPostFromCSV = getPosts(async function() {
    // Implementation
    // Read from CVS
})
