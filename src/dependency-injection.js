const PostRepository = require('./post-repo')
const PostInteractor = require('./post-interactor')
const PostAdapter = require('./post-adapter')

const postRepo = new PostRepository()
const postInter = new PostInteractor({ postRepo })
const postCtr = new PostAdapter({ postInter })

module.exports = postCtr
