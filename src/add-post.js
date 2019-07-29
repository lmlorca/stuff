const Post = require('./post')
const uuid = require('uuid')

module.exports = async function addPost({ postRepo, post }) {
    const postId = uuid()
    const newPost = new Post({
        id: postId,
        title: post.title,
        text: post.text
    })

    await postRepo.save(newPost)
    console.log('Post saved : |')
}
