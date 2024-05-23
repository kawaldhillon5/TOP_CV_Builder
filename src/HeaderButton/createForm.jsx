import { useState } from "react"
import PersonalInfo from "../CV-Class/personalInfo-class";
import WorkHistoryInfo from "../CV-Class/workHistoryInfo-class";
import EducationInfo from "../CV-Class/educationInfo_class";
import { cv } from "../CV-Class/CV-instance";

function PersonalInfoComponent({personalInfoChange, onNext}){


    // const [personalInfoData, setData] = useState(personalInfo);

    const personalInfo = new PersonalInfo()

    function submitPersonalInfo(){
        personalInfoChange(personalInfo);
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

function WorkHistory({workHistoryInfoChange, onNext}){

    const workHistoryInfo = new WorkHistoryInfo();
    function submitWorkHistory(){
        workHistoryInfoChange(workHistoryInfo);
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

function Education({educationInfoChange, onNext}){

    const educationInfo = new EducationInfo();
    function submitEducationInfo(){
        
        educationInfoChange(educationInfo);
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


function CreateForm(props){

    const {handlePersonalInfoChange, handleWorkHistoryInfoChange, handleEducationInfoChange, logCV} = props;

    const [activeForm, setActiveForm] = useState(0);
    const personalInfoChange = (data)=>{
        handlePersonalInfoChange(data);
    }

    const workHistoryInfoChange = (data) => {
        handleWorkHistoryInfoChange(data);
    }

    const educationInfoChange = (data) =>{
        handleEducationInfoChange(data);
    }


    return (
        <>
            {
                activeForm === 0 ? <PersonalInfoComponent personalInfoChange = {personalInfoChange}  onNext={() =>setActiveForm(1)}></PersonalInfoComponent> 
             :  activeForm === 1 ? <WorkHistory workHistoryInfoChange = {workHistoryInfoChange}  onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education educationInfoChange = {educationInfoChange} onNext={() => logCV()}></Education> : null
            
            }
        </>
    )

}

export default CreateForm;