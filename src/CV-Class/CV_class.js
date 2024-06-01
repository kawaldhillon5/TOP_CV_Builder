import PersonalInfo from "../CV-Class/personalInfo-class";

export default class CV {

    constructor(CVObject){
        if(CVObject){

            this.personalInfo = CVObject.personalInfo;
            this.workHistoryInfo = CVObject.workHistoryInfo;
            this.educationInfo = CVObject.educationInfo;

        } else {
            this.personalInfo = new PersonalInfo();
            this.workHistoryInfo = []
            this.educationInfo = [];
        }
    }
}

