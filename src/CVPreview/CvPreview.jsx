import PersonalInfo from "../CV-Class/personalInfo-class";

export default function CvPreview({CV}){


    return (
        <livepreviewdiv>
            <personalinfodiv>
                <h2>{CV.personalInfo.name}</h2>
                <div>{CV.personalInfo.contactNo}</div>
                <div>{CV.personalInfo.email}</div>
                <div>{CV.personalInfo.address}</div>
            </personalinfodiv>
            <workhistoryinfodiv>
                <h2>{CV.workHistoryInfo.title}</h2>
                <div>{CV.workHistoryInfo.companyName}</div>
                <div>{CV.workHistoryInfo.address}</div>
                <div>{CV.workHistoryInfo.startDate}</div>
                <div>{CV.workHistoryInfo.endDate}</div>
                <div>{CV.workHistoryInfo.otherInfo}</div>
            </workhistoryinfodiv>
            <educationinfodiv>
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