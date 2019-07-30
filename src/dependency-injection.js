const PostRepository = require('./post-repo')
const PostInteractor = require('./post-interactor')
const PostController = require('./post-controller')

const postRepo = new PostRepository()
const postInter = new PostInteractor({ postRepo })
const postCtr = new PostController({ postInter })

module.exports = postCtr
