import { useState } from "react"
import Slider from "../slider/slider";
import WorkHistoryInfo from "../CV-Class/workHistoryInfo-class";
import EducationInfo from "../CV-Class/educationInfo_class";
import "./createForm.css"
import imgUrl from "./file.png"

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

function WorkHistory({workHistoryInfo ,workHistoryInfoChange, workHistoryAdd, workHistoryDelete, onNext}){

    const [selected, setSelected] = useState(0);

    const slider = new Slider();
    function submitWorkHistory(){
        onNext();

    }

    const workHistoryAddNew = () =>{
        workHistoryAdd(new WorkHistoryInfo("","","","","",""));
        setSelected(workHistoryInfo.length)
    }

    const workHistoryDeleteNew = (id) => {
        if(id === workHistoryInfo[workHistoryInfo.length -1].id){
            setSelected(slider.leftFnc(0, true));
        }
        workHistoryDelete(id);
    }

    return (

        <div className="formDiv ">
            <h4>Work History</h4>
                            {workHistoryInfo.map((object, i) =>{
                                if(i===selected){
                                    return (
                                                <form className="workInfoForm" id={`${i}`}>
                                                    <input className="radio_button" type="radio" name ="radio_btn" id = {`r${i}`}checked></input>
                                                    <div className="workTitle inputDiv">
                                                        <label htmlFor={`title${object.id}`}>Job Title</label>
                                                        <input id={`title${object.id}`} type = "text" required onChange={(e) => {
                                                            workHistoryInfoChange({...object, title: e.target.value}, object.id)
                                                        }} value={`${object.title}`}></input>
                                                    </div>
                                                    <div className="workCompany inputDiv">
                                                        <label htmlFor={`companyName${object.id}`}>Company Name</label>
                                                        <input id={`companyName${object.id}`} type="text"required onChange={(e) =>{
                                                            workHistoryInfoChange({...object,companyName: e.target.value},object.id);
                                                        }} value={`${object.companyName}`} ></input>
                                                    </div>
                                
                                
                                                    <div className="workStart inputDiv">
                                                        <label htmlFor={`startDate${object.id}`}>Start Date</label>
                                                        <input id={`startDate${object.id}`} type= "date" required onChange={(e) =>{
                                                            workHistoryInfoChange({...object,startDate: e.target.value},object.id);
                                                        }} value={`${object.startDate}`}></input>
                                                    </div>
                                
                                                    <div className="workEnd inputDiv">
                                                        <label htmlFor={`endDate${object.id}`}>End Date</label>
                                                        <input id={`endDate${object.id}`}type="date" required onChange={(e) => {
                                                            workHistoryInfoChange({...object,endDate: e.target.value},object.id);
                                                        }} value={`${object.endDate}`}></input>
                                                    </div>
                                                    <img src={imgUrl} className="deleteButton" onClick={() => {workHistoryDeleteNew(object.id)}}></img>
                                                </form>
                                        )
                                    }
                                })
                            }
            {(workHistoryInfo[0]) ? (
                <div className="radio_buttons_all">
                    <button id="left_slide_button" onClick={()=>{setSelected(slider.leftFnc(0, true))}}>⇐</button>
                    <div className="radio_label">
                        {workHistoryInfo.map((object, i) =>{return <label className= {`labelr${i}`} htmlFor={`r${i}`} style={(i===selected) ? ({backgroundColor: "black"}): ({backgroundColor: "white"})}></label>})}
                    </div>
                    <button id="right_slide_button" onClick={()=>{setSelected(slider.rightFnc(workHistoryInfo.length-1, true))}}>⇒</button>
                </div>
                ) : null
            }
            <button className="addButton" type="button" onClick={workHistoryAddNew}>+</button>
            <button className="nextButton" type="button" onClick={submitWorkHistory} >Next</button>
        </div>
    )
}

function Education({educationInfo ,educationInfoChange, educationAdd, educationDelete, onNext}){

    const [selected, setSelected] = useState(0);
    const slider = new Slider();
    function submitEducationInfo(){
        
        onNext();
    }

    const educationAddNew = () => {
        educationAdd(new EducationInfo("","","","","","",""));
        setSelected(educationInfo.length)
    }

    const educationDeleteNew = (id) => {
        if(id === educationInfo[educationInfo.length -1].id){
            setSelected(slider.leftFnc(0, false));
        }
        educationDelete(id);
    }

    return (

        <div className="formDiv">
            <h4>Education</h4>
            {   educationInfo.map((object,i) => {
                    if(i === selected){
                        return (
                            <form className="educationInfoForm" id={`${i}`}>
                                <input className="radio_button" type="radio" name ="radio_btn" id = {`r${i}`}checked></input>
                                <div className="educationName inputDiv">
                                    <label htmlFor={`name${object.id}`}>Programe Name</label>
                                    <input id={`name${object.id}`} type="text"required onChange={(e) =>{
                                        educationInfoChange({...object,programeName : e.target.value},object.id);
                                    }} value={`${object.programeName}`}></input>
                                </div>
                                
                                <div className="educationInstitution inputDiv">
                                    <label htmlFor={`institution${object.id}`}>Institution Name</label>
                                    <input id={`institution${object.id}`} type = "text" required onChange={(e) =>{
                                        educationInfoChange({...object,institutionName : e.target.value},object.id);
                                    }} value={`${object.institutionName}`}></input>
                                </div>

                                
                                <div className="educationStart inputDiv">
                                    <label htmlFor={`startDate${object.id}`}>Start Date</label>
                                    <input id={`startDate${object.id}`} type= "date" required onChange={(e) =>{
                                        educationInfoChange({...object,startDate : e.target.value},object.id);
                                    }}value={`${object.startDate}`}></input>
                                </div>

                                
                                <div className="educationEnd inputDiv">
                                    <label htmlFor={`endDate${object.id}`}>End Date</label>
                                    <input id={`endDate${object.id}`} type="date" required onChange={(e) =>{
                                        educationInfoChange({...object,endDate : e.target.value},object.id);
                                    }} value={`${object.endDate}`}></input>
                                </div>
                                <img src={imgUrl} className="deleteButton" onClick={() => {workHistoryDeleteNew(object.id)}}></img>
                            </form>
                        )
                    }
                })
            }
            { (educationInfo[0]) ?
                (<div className="radio_buttons_all">
                    <button id="left_slide_button" onClick={()=>{setSelected(slider.leftFnc(0, false))}}>⇐</button>
                    <div className="radio_label">
                        {educationInfo.map((object, i) =>{return <label className= {`labelr${i}`} htmlFor={`r${i}`} style={(i===selected) ? ({backgroundColor: "black"}): ({backgroundColor: "white"})}></label>})}
                    </div>
                    <button id="right_slide_button" onClick={()=>{setSelected(slider.rightFnc(educationInfo.length-1, false))}}>⇒</button>
                </div>) : null
            }
            <button className="addButton" type="button" onClick={educationAddNew}>+</button>
            <button className="nextButton" type="button" onClick={submitEducationInfo} >Create</button>

        </div>

    )
}


function CreateForm(props){

    const {handlePersonalInfoObjectChange,
           handleWorkHistoryInfoObjectChange,
           handleEducationInfoObjectChange,
           handleWorkHistoryInfoSave,
           handleWorkHistoryInfoDelete,
           handleEducationInfoSave,
           handleEducationInfoDelete,
           personalInfoObject,
           workHistoryInfoArray,
           educationInfoArray, set} = props;

    const [activeForm, setActiveForm] = useState(0);
    const personalInfoChange = (data)=>{
        handlePersonalInfoObjectChange(data);
    }

    const workHistoryInfoChange = (data, id) => {
        handleWorkHistoryInfoObjectChange(data,id);
    }

    const educationInfoChange = (data, id) =>{
        handleEducationInfoObjectChange(data,id);
    }

    const workHistorySave = (data) =>{
        handleWorkHistoryInfoSave(data);
    }

    const workHistoryDelete = (id)=>{
        handleWorkHistoryInfoDelete(id);
    }

    const educationSave = (data)=>{
        handleEducationInfoSave(data);
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
             :  activeForm === 1 ? <WorkHistory workHistoryInfo={workHistoryInfoArray} workHistoryInfoChange = {workHistoryInfoChange} workHistoryAdd={workHistorySave} workHistoryDelete={workHistoryDelete}  onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education educationInfo={educationInfoArray} educationInfoChange = {educationInfoChange} educationAdd={educationSave} educationDelete={educationDelete} onNext={() => {setActiveForm(3); setPage()}}></Education>
             :  activeForm === 3 ? <></> : null
            
            }
        </>
    )

}

export default CreateForm;