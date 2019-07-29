module.exports = function Post({ id, text, title }) {
    if (!id) {
        throw new Error('Post must have a unique Id')
    }

    this.id = id

    this.text = text

    this.title = title

    this.createdOn = Date.now()
}
