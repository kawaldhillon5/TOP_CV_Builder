import { useState } from "react"

import { cv } from "../CV-Class/CV-instance";
import "./createForm.css"

function PersonalInfoComponent({personalInfo, personalInfoChange, onNext}){

    function submitPersonalInfo(){
        onNext();
    }

    return (

        <div className="formDiv">
            <h2>Personal Info</h2>
            <form className="personalInfoForm">
                    <div className="nameInput inputDiv">
                        <label htmlFor="name">First and Last Name</label>
                        <input id="name" type="text"required onChange={(e) =>{
                            personalInfoChange({...personalInfo, name: e.target.value});
                        }}></input>
                    </div>
                
                <div className="contactInput inputDiv">
                    <label htmlFor="contactNo">Contact no.</label>
                    <input id="contactNo" type = "number" required onChange={(e)=> {
                        personalInfoChange({...personalInfo, contactNo : e.target.value});
                    }}></input>
                </div>

                
                <div className="emailInput inputDiv">
                    <label htmlFor="email">Email</label>
                    <input id="email" type= "email" required onChange={(e) => {
                        personalInfoChange({...personalInfo, email: e.target.value});
                    }} ></input>
                </div>

                
                <div className="addressInput inputDiv">
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={(e) => {
                        personalInfoChange({...personalInfo, address : e.target.value});
                    }} ></input>
                </div>

                <button className="nextButton" type="button" onClick={submitPersonalInfo} >Next</button>
            </form>
        </div>

    )

}

function WorkHistory({workHistoryInfo ,workHistoryInfoChange, onNext}){

    function submitWorkHistory(){
        onNext();

    }

    return (

        <div className="formDiv ">
            <h4>Work History</h4>
            <form className="workInfoForm">
                <div className="workTitle inputDiv">
                    <label htmlFor="title">Job Title</label>
                    <input id="title" type = "text" required onChange={(e) => {
                        workHistoryInfoChange({...workHistoryInfo, title: e.target.value})
                    }}></input>
                </div>

                <div className="workCompany inputDiv">
                    <label htmlFor="companyName">Company Name</label>
                    <input id="companyName" type="text"required onChange={(e) =>{
                        workHistoryInfoChange({...workHistoryInfo,companyName: e.target.value});
                    }} ></input>
                </div>
                

                
                <div className="workStart inputDiv">
                    <label htmlFor="startDateWork">Start Date</label>
                    <input id="startDateWork" type= "date" required onChange={(e) =>{
                        workHistoryInfoChange({...workHistoryInfo,startDate: e.target.value});
                    }}></input>
                </div>

                
                <div className="workEnd inputDiv">
                    <label htmlFor="endDateWork">End Date</label>
                    <input id="endDateWork" type="date" required onChange={(e) => {
                        workHistoryInfoChange({...workHistoryInfo,endDate: e.target.value});
                    }}></input>
                </div>

                <button className="nextButton" type="button" onClick={submitWorkHistory} >Next</button>

            </form>
        </div>

    )
}

function Education({educationInfo ,educationInfoChange, onNext}){

    function submitEducationInfo(){
        
        onNext();
    }

    return (

        <div className="formDiv">
            <h4>Education</h4>
            <form className="educationInfoForm">
                <div className="educationName inputDiv">
                    <label htmlFor="programeName">Programe Name</label>
                    <input id="programeName" type="text"required onChange={(e) =>{
                        educationInfoChange({...educationInfo,programeName : e.target.value});
                    }}></input>
                </div>
                
                <div className="educationInstitution inputDiv">
                    <label htmlFor="institutionName">Institution Name</label>
                    <input id="institutionName" type = "text" required onChange={(e) =>{
                        educationInfoChange({...educationInfo,institutionName : e.target.value});
                    }}></input>
                </div>

                
                <div className="educationStart inputDiv">
                    <label htmlFor="startDateEdu">Start Date</label>
                    <input id="startDateEdu" type= "date" required onChange={(e) =>{
                        educationInfoChange({...educationInfo,startDate : e.target.value});
                    }}></input>
                </div>

                
                <div className="educationEnd inputDiv">
                    <label htmlFor="endDateEdu">End Date</label>
                    <input id="endDateEdu" type="date" required onChange={(e) =>{
                        educationInfoChange({...educationInfo,endDate : e.target.value});
                    }}></input>
                </div>

                <button className="nextButton" type="button" onClick={submitEducationInfo} >Create</button>

            </form>
        </div>

    )
}


function CreateForm(props){

    const {handlePersonalInfoObjectChange,
           handleWorkHistoryInfoObjectChange,
           handleEducationInfoObjectChange,
           handleWorkHistoryInfoAdd,
           handleWorkHistoryInfoDelete,
           handleEducationInfoAdd,
           handleEducationInfoDelete,
           personalInfoObject,
           workHistoryInfoArray,
           educationInfoArray, logCV, set} = props;

    const [activeForm, setActiveForm] = useState(0);
    const personalInfoChange = (data)=>{
        handlePersonalInfoObjectChange(data);
    }

    const workHistoryInfoChange = (data, id) => {
        handleWorkHistoryInfoObjectChange(data);
    }

    const educationInfoChange = (data, id) =>{
        handleEducationInfoObjectChange(data);
    }

    const workHistoryAdd = (data) =>{
        handleWorkHistoryInfoAdd(data);
    }

    const workHistoryDelete = (id)=>{
        handleWorkHistoryInfoDelete(id);
    }

    const educationAdd = (data)=>{
        handleEducationInfoAdd(data);
    }

    const educationDelete = (id)=>{
        handleEducationInfoDelete(id)
    }

    const setPage = () =>{
        set();
    }


    return (
        <>
            {
                activeForm === 0 ? <PersonalInfoComponent personalInfo={personalInfoObject} personalInfoChange = {personalInfoChange}  onNext={() =>setActiveForm(1)}></PersonalInfoComponent> 
             :  activeForm === 1 ? <WorkHistory workHistoryInfo={workHistoryInfoArray} workHistoryInfoChange = {workHistoryInfoChange} workHistoryAdd={handleWorkHistoryInfoAdd} workHistoryDelete={handleWorkHistoryInfoDelete}  onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education educationInfo={educationInfoArray} educationInfoChange = {educationInfoChange} educationAdd={handleEducationInfoAdd} educationDelete={handleEducationInfoDelete} onNext={() => {logCV(); setActiveForm(3); setPage()}}></Education>
             :  activeForm === 3 ? <></> : null
            
            }
        </>
    )

}

export default CreateForm;