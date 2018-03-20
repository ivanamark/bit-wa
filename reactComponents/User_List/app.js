const User = (props) => {
    const { dataUser } = props

    const getDate = (date) => {
        const myDate = new Date(date)
        const year = myDate.getFullYear();
        const month = myDate.getMonth();
        const day = myDate.getDate()
        return (`${day}-${month}-${year}`)
    }

    return (
        <div>
            <li className="collection-item avatar">
                <img src={dataUser.picture.thumbnail} alt="" className="circle" />
                <span className="title">{`name: ${dataUser.name.first}`}</span>
                <p>{`email: ${dataUser.email}`} <br />
                    {`date of birth: ${getDate(dataUser.dob)}`}
                </p>
            </li>
        </div>
    )
}


const Main = (props) => {
    const { dataMain } = props
    return (
        //  <div>{console.log(dataMain)}</div>   //
        <div className="container"> <ul className="collection">
            {
                dataMain.map((user,index) => {
                    return <User dataUser={user} key={index} />
                })
            }

        </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 copyright BIT
        </div>
            </div>
        </footer>
    )
}




const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>

            </div>
        </nav>
    )
}


const App = (props) => {
    const { data } = props
    return (
        <div>
            <Header />
            <Main dataMain={data} />
            <Footer />
        </div>

    )
}


ReactDOM.render(<App data={usersData} />, document.querySelector(".root"))