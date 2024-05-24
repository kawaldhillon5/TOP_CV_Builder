import { useState } from 'react'
import HeaderButton from './HeaderButton/HeaderButton';
import CreateForm from './HeaderButton/createForm';
import CustomizeForm from './HeaderButton/customizeForm';
import './App.css'
import CvPreview from './CVPreview/CvPreview';
import { cv } from './CV-Class/CV-instance';

function App() {

  const [activePage, setActivePage] = useState(0);
  const [CV, setCV] = useState(cv);

  const handlePersonalInfoChange = (personalInfoData) => {
    setCV({...CV, personalInfo: personalInfoData});
  }
  
  const handleWorkHistoryInfoChange = (workHistoryInfoData) => {
    setCV({...CV, workHistoryInfo: workHistoryInfoData});
  }

  const handleEducationInfoChange = (educationInfoData) => {
    setCV({...CV, educationInfo: educationInfoData});
  }
    return (
        <page>
            <header className='header'>
                <h2>CV Builder</h2>
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
            <buttoncontent>
            {activePage === 1 ? <CreateForm 
                    handlePersonalInfoChange={handlePersonalInfoChange}
                    handleWorkHistoryInfoChange={handleWorkHistoryInfoChange}
                    handleEducationInfoChange={handleEducationInfoChange}
                    logCV = {()=>console.log(CV)}
                    CV={CV}
                ></CreateForm>: activePage === 2 ? <CustomizeForm>

                </CustomizeForm>: null}
            </buttoncontent>
            <CvPreview CV={CV}></CvPreview>
        </page> 
    )
}

export default App
