import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Sidebar from './Components/Siderbar/Sidebar';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import './_app.scss';


const App = () =>{
  return (
    <>
        <Header/>
        <div className='app__container border border-info'>
            <Sidebar/>
            <Container fluid className='app__main border border-warning' >
                <HomeScreen/>
            </Container>
        </div>       
    </>
  )
}

export default App;
