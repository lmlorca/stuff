module.exports = async function getPosts({ postRepo }) {
    console.log('Got some posts : |')
    return await postRepo.findAll()
}
