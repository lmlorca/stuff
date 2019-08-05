const Post = require('./post')

module.exports = (function() {
    function PostInteractor({ postRepo, post }) {
        if (!postRepo) throw new Error('Must include repo')
        this.postRepo = postRepo

        if (post) this.post = post
    }
    PostInteractor.prototype.getAllPosts = function() {
        return this.postRepo
            .findAll()
            .then(result => result)
            .catch(err => console.log(err))
    }

    PostInteractor.prototype.getPostById = function({ postId }) {
        return this.postRepo.findById({ postId }).then(post => post)
    }

    PostInteractor.prototype.addPost = function({ post = this.post }) {
        const postId = this.postRepo.generateId()

        const newPost = new Post({
            id: postId,
            title: post.title,
            text: post.text
        })
        return this.postRepo
            .save({ newPost })
            .then(createdPost => createdPost)
            .catch(err => console.log(err))
    }

    return PostInteractor
})()
