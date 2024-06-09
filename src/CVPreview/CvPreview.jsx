import PersonalInfo from "../CV-Class/personalInfo-class";
import "./CVPreview.css"
export default function CvPreview({CV}){

    return (
        <livepreviewdiv className="livePreviewDiv">
            <personalinfodiv className="personalInfoPreview">
                <h2 className="personalName">{CV.personalInfoObject.name}</h2>
                <div className="personalEmail">{CV.personalInfoObject.email}</div>
                <div className="personalContact">{CV.personalInfoObject.contactNo}</div>
                <div className="personalAddress">{CV.personalInfoObject.address}</div>
            </personalinfodiv>
            <workhistoryinfodiv className="workInfoPreview">
                <h2>Work Experience</h2>
                {CV.workHistoryInfoArray.map((workHistoryInfo, i) => {
                    return (
                            <div className="workHistoryInfoObject">
                                <h2>{`${i+1}.`}</h2>
                                <h2>{workHistoryInfo.title}</h2>
                                <div>{workHistoryInfo.companyName}</div>
                                <div>{workHistoryInfo.address}</div>
                                <div>{workHistoryInfo.startDate}</div>
                                <div>{workHistoryInfo.endDate}</div>
                                <div>{workHistoryInfo.otherInfo}</div>
                            </div>
                        )
                    }
                )}
            </workhistoryinfodiv>
            <educationinfodiv className="educationInfoPreview">
                <h2>Education</h2>
                {CV.educationInfoArray.map((educationInfo, i) => {
                    return (
                            <div className="educationInfoObject">
                                <h2>{`${i+1}.`}</h2>
                                <h2>{educationInfo.programeName}</h2>
                                <div>{educationInfo.institutionName}</div>
                                <div>{educationInfo.address}</div>
                                <div>{educationInfo.startDate}</div>
                                <div>{educationInfo.endDate}</div>
                                <div>{educationInfo.otherInfo}</div>
                            </div>
                        )
                    }
                )}
            </educationinfodiv>
        </livepreviewdiv>
    )
} 