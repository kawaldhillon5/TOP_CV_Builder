import PersonalInfo from "../CV-Class/personalInfo-class";
import "./CVPreview.css"
export default function CvPreview({CV}){


    return (
        <livepreviewdiv className="livePreviewDiv">
            <personalinfodiv className="personalInfoPreview">
                <h2 className="personalName">{CV.personalInfo.name}</h2>
                <div className="personalEmail">{CV.personalInfo.email}</div>
                <div className="personalContact">{CV.personalInfo.contactNo}</div>
                <div className="personalAddress">{CV.personalInfo.address}</div>
            </personalinfodiv>
            <workhistoryinfodiv className="workInfoPreview">
                <h2>Work Experience</h2>
                <h2>{CV.workHistoryInfo.title}</h2>
                <div>{CV.workHistoryInfo.companyName}</div>
                <div>{CV.workHistoryInfo.address}</div>
                <div>{CV.workHistoryInfo.startDate}</div>
                <div>{CV.workHistoryInfo.endDate}</div>
                <div>{CV.workHistoryInfo.otherInfo}</div>
            </workhistoryinfodiv>
            <educationinfodiv className="educationInfoPreview">
                <h2>Education</h2>
                <h2>{CV.educationInfo.programeName}</h2>
                <div>{CV.educationInfo.institutionName}</div>
                <div>{CV.educationInfo.address}</div>
                <div>{CV.educationInfo.startDate}</div>
                <div>{CV.educationInfo.endDate}</div>
                <div>{CV.educationInfo.otherInfo}</div>
            </educationinfodiv>
        </livepreviewdiv>
    )
} 