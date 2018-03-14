import POst from './post.js';
const postUrl = "http://localhost:3000/"
const createPostHtml = (post) => {
    return `
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${post.title}</span>
              <p>${post.intro}</p>
            </div>
           
          </div>
        </div>
      `
}
fetch(postUrl)
    .then((response) => {
        return response.json()
    })
    .then((postsListData) => {

        const myPosts = postsListData.map((post) => {
            return new Post({ ...post
            }) //raspakuje objekte kao posebne propertije


        })
        return myPosts;
    })
    .then((posts) => {

    })
    .catch((error) => {

    })