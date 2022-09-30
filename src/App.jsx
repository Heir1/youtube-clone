import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Sidebar from './Components/Siderbar/Sidebar';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import './_app.scss';


const App = () =>{

    const [sidebar,toggleSidebar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSidebar(!sidebar)
    }

    // <div className='app__container border border-info'>
    // border border-warning

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            
            <div className='app__container'>
                <Sidebar 
                    sidebar={sidebar} 
                    handleToggleSidebar={handleToggleSidebar} 
                />
                <Container fluid className='app__main' >
                    <HomeScreen/>
                </Container>
            </div>       
        </>
    )
}

export default App;
