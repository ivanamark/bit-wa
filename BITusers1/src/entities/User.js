import {
    formatDate,
    hideEmail
} from "../shared/utils"
class User {
    constructor(user) {
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.birthday = formatDate(user.dob);
        this.email = hideEmail(user.email);
        this.photo = user.picture.large;
        this.gender = user.gender;
    }
}
export default User