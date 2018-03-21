import React, { Component } from 'react';
import '../App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Main from './main.js';
import PropTypes from "prop-types"
import UserList from "./users/UserList"
import { userService } from '../service/UserService';
import UserCard from "./users/UserCard"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isListView: true,

    }
  }

  // componentWillMount() {
    
  // }

  componentDidMount() {
    this.getViewMode();

    let users = userService.fetchUsers()
    users.then((userList) => {
      this.setState({ users: userList })
    })
  }

  handleRefreshClick = (event) => {////6
    event.preventDefault();

    let users = userService.fetchUsers()
    users.then((userList) => {
      this.setState({ users: userList })
    })

  }


  handleIconClick = (event) => {
    event.preventDefault();
    // console.log(event);
    if (this.state.isListView === true) {
      localStorage.setItem("viewMode", false)
      this.setState({ isListView: false })
    } else {
      localStorage.setItem("viewMode", true)
      this.setState({ isListView: true })
    }
    // this.setState({isListView:event.target.module});
    // samo true ili false
    // menja se na klik
    // ako je true onda false
    // ako je false onda true
  }

  getViewMode = () => {
    const isListView = JSON.parse(localStorage.getItem("viewMode"));
    this.setState({isListView});
  }

  render() {
    return (
      <div>
        <Header title="React users" handleIconClick={this.handleIconClick} handleRefreshClick={this.handleRefreshClick} />
        <UserList users={this.state.users} isListView={this.state.isListView} />
        {/* <UserCard users={this.handleIconClick} /> */}
      </div>
    )
  }
}

// const App = (props) => {
//   const { data } = props
//   return (
//       <div>
//           <Header />
//           <Main dataMain={data} />
//           <Footer />
//       </div>

//   )
// }


export default App;
