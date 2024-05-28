export default class CV {

    constructor(CVObject){
        if(CVObject){

            this.personalInfo = CVObject.personalInfo;
            this.workHistoryInfo = CVObject.workHistoryInfo;
            this.educationInfo = CVObject.educationInfo;

        } else {
            this.personalInfo = {};
            this.workHistoryInfo = {};
            this.educationInfo = {};
        }
    }

    getCv(){
        return {personalInfo : this.personalInfo,workHistoryInfo : this.workHistoryInfo, educationInfo : this.educationInfo};
    }

    
}

