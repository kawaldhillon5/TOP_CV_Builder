import { useState } from "react"



function PersonalInfo({CV, onNext}){

    const personnalInfo = {}

    function submitPersonalInfo(){
        console.log(personnalInfo);
        onNext();
    }

    return (

        <div className="formDiv personalInfoForm">
            <h4>Personal Info</h4>
            <form>
                <label htmlFor="name">First and Last Name</label>
                <input id="name" type="text"required onChange={(e) =>{
                    personnalInfo.name = e.target.value;
                }}></input>
                
                <label htmlFor="contactNo">Contact no.</label>
                <input id="contactNo" type = "number" required onChange={(e)=> {
                    personnalInfo.contactNo = e.target.value;
                }}></input>

                
                <label htmlFor="email">Email</label>
                <input id="email" type= "email" required onChange={(e) => {
                    personnalInfo.email = e.target.value;
                }} ></input>

                
                <label htmlFor="address">Address</label>
                <input id="address" type="text" onChange={(e) => {
                    personnalInfo.address = e.target.value;
                }} ></input>

                <button type="button" onClick={submitPersonalInfo} >Next</button>
            </form>
        </div>

    )

}

function WorkHistory({CV, onNext}){
    return (

        <div className="formDiv workInfoForm">
            <h4>Work History</h4>
            <form>
                <label htmlFor="title">Job Title</label>
                <input id="title" type = "text" required ></input>

                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" type="text"required ></input>
                

                
                <label htmlFor="startDateWork">Start Date</label>
                <input id="startDateWork" type= "date" required ></input>

                
                <label htmlFor="endDateWork">End Date</label>
                <input id="endDateWork" type="date" required ></input>

                <button type="button" onClick={onNext} >Next</button>

            </form>
        </div>

    )
}

function Education({CV, onNext}){
    return (

        <div className="formDiv educationInfoForm">
            <h4>Education</h4>
            <form>
                <label htmlFor="programeName">Programe Name</label>
                <input id="programeName" type="text"required ></input>
                
                <label htmlFor="institutionName">Institution Name</label>
                <input id="institutionName" type = "text" required ></input>

                
                <label htmlFor="startDateEdu">Start Date</label>
                <input id="startDateEdu" type= "date" required ></input>

                
                <label htmlFor="endDateEdu">End Date</label>
                <input id="endDateEdu" type="date" required ></input>

                <button type="button" onClick={onNext} >Next</button>

            </form>
        </div>

    )
}


function CreateForm(CV){

    const [activeForm, setActiveForm] = useState(0);

    return (
        <>
            {
                activeForm === 0 ? <PersonalInfo CV= {CV} onNext={() =>setActiveForm(1)}></PersonalInfo> 
             :  activeForm === 1 ? <WorkHistory CV= {CV} onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education CV= {CV} onNext={() => setActiveForm(0)}></Education> : null
            
            }
        </>
    )

}

export default CreateForm;