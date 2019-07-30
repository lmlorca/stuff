module.exports = (function() {
    function PostController({ postInter }) {
        this.postInter = postInter
    }
    PostController.prototype.createPost = async function({ req, res }) {
        const dto = {
            title: req.body.title,
            text: req.body.text
        }
        try {
            res.send(await this.postInter.addPost({ post: dto }))
        } catch (e) {
            res.send(e)
        }
    }
    PostController.prototype.getPosts = async function() {
        return await this.postInter.getAllPosts()
    }

    return PostController
})()
