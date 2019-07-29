const Post = require('./post')

module.exports = async function addPost({ postRepo, generateId, post }) {
    const postId = generateId()
    const newPost = new Post({
        id: postId,
        title: post.title,
        text: post.text
    })

    await postRepo.save(newPost)
    console.log('Post saved : |')
}
