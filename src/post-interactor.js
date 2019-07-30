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

    PostInteractor.prototype.addPost = function({ post = this.post }) {
        const postId = this.postRepo.generateId()
        const newPost = new Post({
            id: postId,
            title: this.post.title,
            text: this.post.text
        })
        this.postRepo
            .save(newPost)
            .then(() => console.log('Post saved'))
            .catch(err => console.log(err))
    }

    return PostInteractor
})()
