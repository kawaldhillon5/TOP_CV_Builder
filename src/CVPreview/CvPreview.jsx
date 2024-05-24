import PersonalInfo from "../CV-Class/personalInfo-class";

export default function CvPreview({CV}){

    let name, contactNo, email, address;
    if(CV.personalInfo.name){
        name = CV.personalInfo.name 
    } else {
        name = ""
    }
    if(CV.personalInfo.contactNo){
        contactNo = CV.personalInfo.contactNo 
    } else {
        contactNo = ""
    }
    if(CV.personalInfo.address){
        address = CV.personalInfo.address 
    } else {
        address = ""
    }
    if(CV.personalInfo.email){
        email = CV.personalInfo.email 
    } else {
        email = ""
    }
    return (
        <livepreviewdiv>
            <personalinfodiv>
                <h2>{name}</h2>
                <div>{contactNo}</div>
                <div>{email}</div>
                <div>{address}</div>
            </personalinfodiv>
        </livepreviewdiv>
    )
} 