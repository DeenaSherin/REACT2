import logo from './logo.svg';
import './App.css';
import PropsComponent from './componenets/functionalcomponents/PropsComponent';
import PropsComponents1 from './componenets/functionalcomponents/Propscomponents1';
// import TestComp from './componenets/functionalcomponents/testComponent';
// import TestClassComp from './componenets/classComponents/testClassComponent';
// import Login from './componenets/classComponents/LoginComponent';


function App() {
  return (
    <div className="App">
    <PropsComponent name="Deena Sherin" course="MERN"/>
 
      <header className="App-header">
      <PropsComponents1 location="India" city="Erode"/>
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
