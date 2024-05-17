export default class PersonalInfo {
    constructor(name, contactNo, email, address){
        this.name = name;
        this.contactNo = contactNo;
        this.email = email;
        this.address = address;
    }

    getPersonalInfo(){
        return {name : this.name, contactNo : this.contactNo, email : this.email, address : this.address};
    }
}