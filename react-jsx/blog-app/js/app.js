
const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">My App</a>

            </div>
        </nav>
    )
}

const PostItem = (props) => {
    const { body, title } = props//destructuring

    return (
        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>

    )
}

const createPost = (postList) => {
    return postList.map((post) => {
        return <PostItem title={post.title} body={post.body} key={post.id} />
    })
}

const PostList = (props) => {
    const postList = props.posts
    return (
        <div className="row">
            {createPost(postList)}
        </div>

    )

}
const Main = (props) => {
    const dataFromMain = props.mainData
    return (
        <PostList posts={dataFromMain} />
    )
}

const App = (props) => {
    const dataFromApp = props.data
    return (
        <div>
            <Header />
            <Main mainData={dataFromApp} />
        </div>
    )
}

ReactDOM.render(
    <App data={posts} />,
    document.querySelector(".root")
)

