export default class WorkHistoryInfo {
    constructor(title, companyName, address, startDate, endDate, otherInfo) {
      this.title = title;
      this.companyName = companyName;
      this.address = address;
      this.startDate = startDate;
      this.endDate = endDate;
      this.otherInfo = otherInfo;
    }

    getWorkHistoryInfo(){
        return {title: this.title, companyName : this.companyName, address: this.address, startDate: this.startDate, endDate: this.endDate, otherInfo: this.otherInfo};
    }
}