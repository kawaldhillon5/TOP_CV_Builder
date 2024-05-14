import { useState } from 'react'
import HeaderButton from './HeaderButton/HeaderButton';
import CreateForm from './HeaderButton/createForm';
import CustomizeForm from './HeaderButton/customizeForm';

import './App.css'

function App() {
  const [activePage, setActivePage] = useState(0);

    return (
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
            {activePage === 1 ? <CreateForm></CreateForm>: activePage === 2 ? <CustomizeForm></CustomizeForm>: null}
        </header>
    )
}

export default App
