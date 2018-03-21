import User from './../entities/User'

class UserService {
    fetchUsers() {
        return fetch('https://randomuser.me/api/?results=15 ')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const usersData = data.results


                const myUsers = usersData.map((user) => {
                    return new User(user)
                })
                return myUsers;
            })
    }
};
export const userService = new UserService()