import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home.jsx'
// import Login from "./pages/Login";
// import Umubyeyidash from "./pages/Umubyeyidash";
// import UmuMessage from "./pages/UmuMessage";
// import UmuSchedule from "./pages/UmuSchedule";
// import HealthLogin from "./pages/HealthLogin";
// import HealthHome from "./pages/HealthHome";
// import HealthRegist from "./pages/HealthRegist";
import Forgetpwd from "./pages/Parent/Forgetpwd";
import Login from "./pages/Parent/Login";
import Umubyeyidash from "./pages/Parent/Umubyeyidash";
import UmuMessage from "./pages/Parent/UmuMessage";
import UmuSchedule from "./pages/Parent/UmuSchedule";
import HealthLogin from "./pages/Healthcare/HealthLogin";
import HealthHome from "./pages/Healthcare/HealthHome";
import HealthRegist from "./pages/Healthcare/HealthRegist";
import Parentlist from "./pages/Healthcare/Parentlist";
import Message from "./pages/Healthcare/Message";
import Appointmentlist from "./pages/Healthcare/Appointmentlist";
import Contactus from "./pages/Parent/Contactus";
import ResetInstruction from "./pages/Parent/ResetInstruction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/umubyeyidash" element={<Umubyeyidash/>}/>
        <Route path="/umuMessage" element={<UmuMessage/>}/>
        <Route path="/umuSchedule" element={<UmuSchedule/>}/>
        <Route path="/healthlogin" element={<HealthLogin/>}/>
        <Route path="/healthhome" element={<HealthHome/>}/>
        <Route path="/healthregist" element={<HealthRegist/>}/>
        <Route path="/forgetpassword" element={<Forgetpwd/>}/>
        <Route path="/parentlist" element={<Parentlist/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/appointmentlist" element={<Appointmentlist/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
       <Route path="/resetinstruction" element={<ResetInstruction/>}/>
      </Routes>
    </div>
  );
}

export default App;
