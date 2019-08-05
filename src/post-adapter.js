module.exports = (function() {
    function PostController({ postInter }) {
        this.postInter = postInter
    }
    PostController.prototype.createPost = async function({ title, text }) {
        const dto = {
            title,
            text
        }
        return await this.postInter.addPost({ post: dto })
    }
    PostController.prototype.getPosts = async function() {
        return await this.postInter.getAllPosts()
    }

    PostController.prototype.getPostById = async function({ postId }) {
        return await this.postInter.getPostById({ postId })
    }

    return PostController
})()
