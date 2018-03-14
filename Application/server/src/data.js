const loremIpsum = require('lorem-ipsum')
const Post = require('./post')

const getTitle = () => loremIpsum({
    count: 3,
    units: 'words'
})

const getIntro = () => loremIpsum({
    count: 2,
    units: 'sentences'
})

const createPosts = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let post = new Post(i, getTitle(), getIntro());
        arr.push(post);
    }
    return arr;
};

module.exports = {
    createPosts
}