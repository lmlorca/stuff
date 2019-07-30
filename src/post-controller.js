module.exports = (function() {
    function PostController({ postInter }) {
        this.postInter = postInter
    }
    PostController.prototype.getPosts = async function() {
        return await this.postInter.getAllPosts()
    }

    return PostController
})()
