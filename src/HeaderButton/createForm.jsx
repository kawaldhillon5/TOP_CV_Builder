import { useState } from "react"



function PersonalInfo({CVPersonalInfo, onNext}){

    const personalInfo = {}

    function submitPersonalInfo(){
        CVPersonalInfo = {...CVPersonalInfo , 1 : personalInfo};
        onNext();
    }

    return (

        <div className="formDiv personalInfoForm">
            <h4>Personal Info</h4>
            <form>
                <label htmlFor="name">First and Last Name</label>
                <input id="name" type="text"required onChange={(e) =>{
                    personalInfo.name = e.target.value;
                }}></input>
                
                <label htmlFor="contactNo">Contact no.</label>
                <input id="contactNo" type = "number" required onChange={(e)=> {
                    personalInfo.contactNo = e.target.value;
                }}></input>

                
                <label htmlFor="email">Email</label>
                <input id="email" type= "email" required onChange={(e) => {
                    personalInfo.email = e.target.value;
                }} ></input>

                
                <label htmlFor="address">Address</label>
                <input id="address" type="text" onChange={(e) => {
                    personalInfo.address = e.target.value;
                }} ></input>

                <button type="button" onClick={submitPersonalInfo} >Next</button>
            </form>
        </div>

    )

}

function WorkHistory({CVWorkHistoryInfo, onNext}){

    const workHistoryInfo = {};
    const workHistoryInfoArray = CVWorkHistoryInfo;
    function submitWorkHistory(){
        workHistoryInfoArray.push(workHistoryInfo);
        CVWorkHistoryInfo = workHistoryInfoArray;
        onNext();

    }

    return (

        <div className="formDiv workInfoForm">
            <h4>Work History</h4>
            <form>
                <label htmlFor="title">Job Title</label>
                <input id="title" type = "text" required onChange={(e) => {
                    workHistoryInfo.title = e.target.value;
                }}></input>

                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" type="text"required onChange={(e) =>{
                    workHistoryInfo.companyName = e.target.value;
                }} ></input>
                

                
                <label htmlFor="startDateWork">Start Date</label>
                <input id="startDateWork" type= "date" required onChange={(e) =>{
                    workHistoryInfo.startDate = e.target.value;
                }}></input>

                
                <label htmlFor="endDateWork">End Date</label>
                <input id="endDateWork" type="date" required onChange={(e) => {
                    workHistoryInfo.endDate = e.target.value;
                }}></input>

                <button type="button" onClick={submitWorkHistory} >Next</button>

            </form>
        </div>

    )
}

function Education({CVEducationInfo, onNext}){

    const educationInfo = {};
    const educationInfoArray = CVEducationInfo;
    function submitEducationInfo(){
        educationInfoArray.push(educationInfo);
        CVEducationInfo = educationInfoArray;
        onNext();
    }

    return (

        <div className="formDiv educationInfoForm">
            <h4>Education</h4>
            <form>
                <label htmlFor="programeName">Programe Name</label>
                <input id="programeName" type="text"required onChange={(e) =>{
                    educationInfo.programeName = e.target.value;
                }}></input>
                
                <label htmlFor="institutionName">Institution Name</label>
                <input id="institutionName" type = "text" required onChange={(e) =>{
                    educationInfo.institutionName = e.target.value;
                }}></input>

                
                <label htmlFor="startDateEdu">Start Date</label>
                <input id="startDateEdu" type= "date" required onChange={(e) =>{
                    educationInfo.startdate = e.target.value;
                }}></input>

                
                <label htmlFor="endDateEdu">End Date</label>
                <input id="endDateEdu" type="date" required onChange={(e) =>{
                    educationInfo.endDate = e.target.value;
                }}></input>

                <button type="button" onClick={submitEducationInfo} >Next</button>

            </form>
        </div>

    )
}


function CreateForm(CV){

    const [activeForm, setActiveForm] = useState(0);

    return (
        <>
            {
                activeForm === 0 ? <PersonalInfo CV= {CV.personalInfo} onNext={() =>setActiveForm(1)}></PersonalInfo> 
             :  activeForm === 1 ? <WorkHistory CV= {CV.WorkHistoryInfo} onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education CV= {CV.educationInfo} onNext={() => setActiveForm(0)}></Education> : null
            
            }
        </>
    )

}

export default CreateForm;