
const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>

            </div>
        </nav>
    )
}

const UserItem = (props) => {
    const { avatar, name, email, dob } = props//destructuring

    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={avatar} alt="" className="circle" />

                <p>{name}</p><br /><p>{email}</p><br /><p>{dob}</p>
            </li>
        </ul>
    )
}



const createUser = (userList) => {
    return userList.map((user, index) => {
        return <UserItem key={index} avatar={user.picture.thumbnail} name={user.name.first} email={user.email} dob={user.dob} />
    })
}


const UserList = (props) => {
    const userList = props.users
    return (
        <div className="row">
            {createUser(userList)}
        </div>

    )

}
const Main = (props) => {
    const dataFromMain = props.mainData
    return (
        <UserList users={dataFromMain} />
    )
}

const App = (props) => {
    const dataFromApp = props.data
    return (
        <div>
            <Header />
            <Main mainData={dataFromApp} />
            <Footer />
        </div>
    )
}



const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright Bit
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}
ReactDOM.render(
    <App data={usersData} />,
    document.querySelector(".root")
)
