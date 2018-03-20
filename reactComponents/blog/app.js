
const PostItem = (props) => {
    const { dataItem } = props

    return (

        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{dataItem.title}</span>
                    <p>{dataItem.body}.</p>
                </div>
            </div>
        </div>

    )
}


const PostList = (props) => {
    const { dataList } = props
    return (
        <div className="container">
        <div className="row">
                {
                    dataList.map(function (post, index) {
                        return <PostItem dataItem={post} key={index} />
                    })
                }
            </div>
        </div>
    )

}

const Main = (props) => {
    const { dataMain } = props
    return (
        // <p></p>
        <PostList dataList={dataMain} />
    )
}



const Header = () => {
    return (

        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Blog App</a>

            </div>
        </nav>

    )
}


const App = (props) => {
    // console.log(props)
    const { data } = props
    return (
        <div>
            <Header />
            <Main dataMain={data} />
        </div>
    )
}






ReactDOM.render(< App data={posts} />, document.querySelector(".root"))


