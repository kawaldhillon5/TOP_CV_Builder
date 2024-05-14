import { useState } from "react"

function PersonalInfo({onNext}){

    return (

        <div className="formDiv personalInfoForm">
            <h4>Personal Info</h4>
            <form>
                <label htmlFor="name">First and Last Name</label>
                <input id="name" type="text"required ></input>
                
                <label htmlFor="contactNo">Contact no.</label>
                <input id="ContactNo" type = "number" required ></input>

                
                <label htmlFor="email">Email</label>
                <input id="email" type= "email" required ></input>

                
                <label htmlFor="address">Address</label>
                <input id="address" type="text" ></input>

                <button type="button" onClick={onNext} >Next</button>

            </form>
        </div>

    )

}

function WorkHistory({onNext}){
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

function Education({onNext}){
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


function CreateForm(){

    const [activeForm, setActiveForm] = useState(0);

    return (
        <>
            {
                activeForm === 0 ? <PersonalInfo onNext={() =>setActiveForm(1)}></PersonalInfo> 
             :  activeForm === 1 ? <WorkHistory onNext={() => setActiveForm(2)}></WorkHistory> 
             :  activeForm === 2 ? <Education onNext={() => setActiveForm(0)}></Education> : null
            
            }
        </>
    )

}

export default CreateForm;