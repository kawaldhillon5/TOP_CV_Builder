import { useState } from 'react'
import HeaderButton from './HeaderButton/HeaderButton';
import CreateForm from './HeaderButton/createForm';
import CustomizeForm from './HeaderButton/customizeForm';
import './App.css'
import CvPreview from './CVPreview/CvPreview';
import { cv } from './CV-Class/CV-instance';

function App() {

  const [activePage, setActivePage] = useState(0);
//   const [CV, setCV] = useState(cv);

  // seprating CV object's components
  
  const [personalInfoObject, setPersonalInfo] = useState(cv.personalInfo);
  const [workHistoryInfoArray, setWorkHistoryInfo] = useState(cv.workHistoryInfo);
  const [educationInfoArray, setEducationInfo] = useState(cv.educationInfo);

  let className = ""; 
  activePage === 0 ? className = "NoContent": className ="content"
//   const handlePersonalInfoChange = (personalInfoData) => {
//     setCV({...CV, personalInfo: personalInfoData});
//   }
  
//   const handleWorkHistoryInfoChange = (workHistoryInfoData) => {
//     setCV({...CV, workHistoryInfo: workHistoryInfoData});
//   }

//   const handleEducationInfoChange = (educationInfoData) => {
//     setCV({...CV, educationInfo: educationInfoData});
//   }

  // functions to handle the state change for each component

  const handlePersonalInfoObjectChange = (personalInfoData) => {
    setPersonalInfo(personalInfoData);
  }

  const handleWorkHistoryInfoObjectChange = (workHistoryInfoData, id) =>{
    setWorkHistoryInfo(workHistoryInfoArray.map(object =>{
        if(object.id === id) {
            return workHistoryInfoData;
        } else {
            return object;
        }
    }));
  }

  const handleWorkHistoryInfoSave = (workHistoryInfoData) =>{
    const array = workHistoryInfoArray.slice();
    array.push(workHistoryInfoData);
    setWorkHistoryInfo(array);
  }

  const handleWorkHistoryInfoDelete = (id) => {
    const array = [];
    workHistoryInfoArray.map(object =>{
      if(!(object.id == id)){
        array.push(object);
      }
    });
    setWorkHistoryInfo(array);
  }

  const handleEducationInfoObjectChange = (educationInfoData, id) =>{
    setEducationInfo(educationInfoArray.map(object =>{
        if(object.id === id) {
            return educationInfoData
        } else {
            return object;
        }
    }));
  }

  const handleEducationInfoSave = (educationInfoData) =>{
    const array = educationInfoArray.slice();
    array.push(educationInfoData);
    setEducationInfo(array);
  }

  const handleEducationInfoDelete = (id) => {
    const array = [];
    educationInfoArray.map((object)=>{
      if(!(object.id == id)){
        array.push(object);
      }
    });
    setEducationInfo(array);
  }



    return (
        <page>
            <header className='header'>
                <h2 className='headerTitle'>CV Builder</h2>
                <HeaderButton 
                    title = "Create"
                    isActive={activePage === 1}
                    set={() => {
                        setActivePage(1);
                    }}
                ></HeaderButton>
                <HeaderButton
                    title = "Customize"
                    isActive={activePage === 2}
                    set={() => {
                        setActivePage(2);
                    }}
                ></HeaderButton>
            </header>
            {}
            <div className= {`${className}`}>
                <buttoncontent className="buttonContentDiv">
                {activePage === 1 ? <CreateForm 
                        // handlePersonalInfoChange={handlePersonalInfoChange}
                        // handleWorkHistoryInfoChange={handleWorkHistoryInfoChange}
                        // handleEducationInfoChange={handleEducationInfoChange}
                        // logCV = {()=>console.log(CV)}
                        // CV={CV}
                        personalInfoObject={personalInfoObject}
                        workHistoryInfoArray={workHistoryInfoArray}
                        educationInfoArray={educationInfoArray}
                        handlePersonalInfoObjectChange={handlePersonalInfoObjectChange}
                        handleWorkHistoryInfoSave={handleWorkHistoryInfoSave}
                        handleWorkHistoryInfoObjectChange={handleWorkHistoryInfoObjectChange}
                        handleWorkHistoryInfoDelete={handleWorkHistoryInfoDelete}
                        handleEducationInfoSave={handleEducationInfoSave}
                        handleEducationInfoObjectChange={handleEducationInfoObjectChange}
                        handleEducationInfoDelete={handleEducationInfoDelete}
                        set={()=>setActivePage(0)}
                    ></CreateForm>: activePage === 2 ? <CustomizeForm>

                    </CustomizeForm>: null}
                </buttoncontent>
                <CvPreview CV={{personalInfoObject, workHistoryInfoArray, educationInfoArray}}></CvPreview>
            </div>
        </page> 
    )
}

export default App
