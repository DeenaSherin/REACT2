import './App.css';
// import PropsComponent from './componenets/functionalcomponents/PropsComponent';
//import PropsComponents1 from './componenets/functionalcomponents/Propscomponents1';
//import StateComponent from './componenets/classComponents/StateComponent';
//import StateComponent2 from './componenets/classComponents/StateComponent2';
// import TestComp from './componenets/functionalcomponents/testComponent';
// import TestClassComp from './componenets/classComponents/testClassComponent';
// import Login from './componenets/classComponents/LoginComponent';
import NavBar from './componenets/functionalcomponents/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './componenets/functionalcomponents/About';
import Experience from './componenets/functionalcomponents/Experience';
import Login from './componenets/functionalcomponents/Login';
import Home from './componenets/functionalcomponents/Home';
import Footer from './componenets/functionalcomponents/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='Home' element={<Home/>}> </Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Experience' element={<Experience/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>

    
    </Routes>

    </BrowserRouter>
        {/*<PropsComponent name="Deena Sherin" course="MERN"/>*/}
 
    
       {/*<PropsComponents1 location="India" city="Erode"/>*/}
      {/* <StateComponent/>*/}
       {/*<StateComponent2/>*/}
       <BrowserRouter>
    <Footer/>
    </BrowserRouter>

        
    </div>
 
  
  );
}
export default App;
