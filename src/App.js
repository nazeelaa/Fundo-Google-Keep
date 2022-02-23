 import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import  TakenoteOne from './Components/takenoteone/takenoteOne';
import TakenoteTwo from './Components/Takenotetwo/takenoteTwo';
import TakeNoteThree from './Components/takenoteThree/takeNoteThree';
import Dashboard from './Pages/Dashboard/dashboard';
import Router1 from './Router/router';



 import Signin from './Pages/Signin/Signin';

import Signup from './Pages/Signup/Signup';




function App() {
  return (
    <div className="App">

      <Router1 />
         {/* <Signin />         */}
      {/* <Signup />       */}
     
       {/* <TakenoteOne />  */}
    {/* <TakenoteTwo />     */}
    {/* <Header />   */}
     {/* < Dashboard />    */}
      {/* <TakeNoteThree />   */}
     
    </div>
  );
}

export default App;
