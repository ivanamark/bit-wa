import React, { Component } from 'react';
import '../App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Main from './main.js';
import PropTypes from "prop-types"
import UserList from "./users/UserList"
import { userService } from '../service/UserService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    let users = userService.fetchUsers()
    users.then((userList) => {
      this.setState({ users: userList })
    })
  }
  render() {
    return (
      <div>
        <Header title="React users" />
        <UserList users={this.state.users} />
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
