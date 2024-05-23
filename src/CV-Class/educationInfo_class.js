export default class EducationInfo{
    constructor(programeName, institutionName, address, startDate, endDate, otherInfo){
        this.programeName = programeName;
        this.institutionName = institutionName;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
        this.otherInfo = otherInfo;
    }

    getEducationInfo(){
        return {programeName : this.programeName, institutionName: this.institutionName, address: this.address, startDate: this.startDate, endDate: this.endDate, otherInfo: this.otherInfo}
    }

}