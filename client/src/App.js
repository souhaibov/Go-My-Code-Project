import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Events2021 from "./Pages/Events/Events2021";
import Events2022 from "./Pages/Events/Events2022";
import Events2023 from "./Pages/Events/Events2023";

import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import Students from "./Pages/Students";
import Instructors from "./Pages/Instructors";
import DataInstructors from "./Components/DataInstructors";
import DataManage from "./Components/DataManaging2020";
import Register from "./Pages/Register";
import {useDispatch} from "react-redux";
import { getUser, userCurrent } from "./Redux/userSlice/userSlice";
import Dashboard from "./Pages/Dashboard";
// import PrivateRoute from "./route/PrivateRoute";
import M_event from "./Pages/dashboard/M_event";
import M_activity from "./Pages/dashboard/M_activity";
import M_user from "./Pages/dashboard/M_user";
import { getEvent } from "./Redux/userSlice/eventSlice";
import { getActivity } from "./Redux/userSlice/activitySlice";
import Activities from "./Pages/Activities";
import StudentsRoute from "./route/StudentsRoutes";
import AdminRoute from "./route/AdminRoutes";
// import { Switch } from "@material-ui/core";
import SwitchRoutes from "./route/SwitchRoutes";
import StudentDash from "./Pages/StudentDash/StudentQuiz";
import  ScrollUpButton from "react-scroll-up-button";
import ForgotPassword from "./Pages/ForgotPassword";
import Managing2012 from "./Pages/Managing/Managing2012";
import Managing2017 from "./Pages/Managing/Managing2017";
import Managing2019 from "./Pages/Managing/Managing2019";
import Managing2020 from "./Pages/Managing/Managing2020";
import Managing2022 from "./Pages/Managing/Managing2022";
import StudentQuiz from "./Pages/StudentDash/StudentQuiz";
import StudentYoutube from "./Pages/StudentDash/StudentYoutube";
import StudentsLevel1 from "./Pages/Student/StudentsLevel1";
import StudentsLevel2 from "./Pages/Student/StudentsLevel2";
import StudentsLevel3 from "./Pages/Student/StudentsLevel3";
import StudentsLevel4 from "./Pages/Student/StudentsLevel4";
import StudentsLevelMaya from "./Pages/Student/StudentsLevelMaya";
import StudentsLevelGhannouch from "./Pages/Student/StudentsLevelGhannouch";

function App() {
  const [ping, setPing] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getEvent());
    dispatch(getActivity())
    dispatch(getUser())

  }, [dispatch]);
  //   return () => {

  //   }

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Activities" element={<Activities />} />

          <Route path="/Events2022" element={<Events2022 />} />
          <Route path="/Events2021" element={<Events2021 />} />
          <Route path="/Events2023" element={<Events2023 />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/StudentDash" element={<StudentDash />} />
          <Route
            path="/Students"
            element={
              <Students/>
            }
          />

            <Route path="/Students" element={<Students/>}>
                 <Route path="/Students/StudentsLevel1" element={<StudentsLevel1/>} />
                 <Route path="/Students/StudentsLevel2" element={<StudentsLevel2/>} />
                 <Route path="/Students/StudentsLevel3" element={<StudentsLevel3/>} />
                 <Route path="/Students/StudentsLevel4" element={<StudentsLevel4/>} />
                 <Route path="/Students/StudentsLevelMaya" element={<StudentsLevelMaya/>} />
                 <Route path="/Students/StudentsLevelGhannouch" element={<StudentsLevelGhannouch/>} />
            </Route>



          <Route
            path="/Instructors"
            element={<Instructors DataInstructors={DataInstructors} />}
          />
         
          <Route path="/Managing2012" element={<Managing2012 DataManage={DataManage} />}/>
           <Route path="/Managing2017" element={<Managing2017 DataManage={DataManage} />}/>
           <Route path="/Managing2019" element={<Managing2019 DataManage={DataManage} />}/>
          <Route path="/Managing2020" element={<Managing2020 DataManage={DataManage} />}/>
          <Route path="/Managing2022" element={<Managing2022 DataManage={DataManage} />}/>

          <Route path="/StudentQuiz" element={<StudentQuiz />} />
          <Route path="/StudentYoutube" element={<StudentYoutube />} />


           <Route element={<AdminRoute/>}>
            <Route path="/Dashboard" element={<Dashboard ping={ping}/>}>
                 <Route path="/Dashboard/event" element={<M_event ping={ping} setPing={setPing} />} />
                 <Route path="/Dashboard/activity" element={<M_activity ping={ping} setPing={setPing}/>} />
                 <Route path="/Dashboard/user" element={<M_user ping={ping} setPing={setPing}/>} />
            </Route>
           </Route>

           <Route element={<StudentsRoute/>}>
            <Route path="/Pages/StudentDash" 
            element={<StudentDash ping={ping}/>}>
            </Route>
           </Route>
           <Route element={<SwitchRoutes/>}>
                <Route path="/switch" element={<Login/>} />
           </Route>
          <Route path="/Forgot" element={<ForgotPassword/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <ScrollUpButton style={{width: 30, height:35}} ToggledStyle={{right: 50}}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
