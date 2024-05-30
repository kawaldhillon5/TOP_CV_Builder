import PersonalInfo from "../CV-Class/personalInfo-class";
import WorkHistoryInfo from "../CV-Class/workHistoryInfo-class";
import EducationInfo from "../CV-Class/educationInfo_class";
export default class CV {

    constructor(CVObject){
        if(CVObject){

            this.personalInfo = CVObject.personalInfo;
            this.workHistoryInfo = CVObject.workHistoryInfo;
            this.educationInfo = CVObject.educationInfo;

        } else {
            this.personalInfo = new PersonalInfo();
            this.workHistoryInfo = new WorkHistoryInfo();
            this.educationInfo = new EducationInfo();
        }
    }
}

