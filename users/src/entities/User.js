class User{
    constructor(user){
        this.firstName=user.name.first;
        this.lastName=user.name.last;
        this.birthday=user.dob;
        this.email=user.email;
        this.photo=user.picture.large;
    }
}
export default User