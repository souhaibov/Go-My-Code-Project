import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import Students from "./Pages/Students";
import Instructors from "./Pages/Instructors";
import DataInstructors from "./Components/DataInstructors";
import Managing from "./Pages/Managing";
import DataManage from "./Components/DataManaging";
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
          <Route path="/Events" element={<Events />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          
          <Route
            path="/Students"
            element={
              <Students/>
            }
          />
          <Route
            path="/Instructors"
            element={<Instructors DataInstructors={DataInstructors} />}
          />
          <Route
            path="/Managing"
            element={<Managing DataManage={DataManage} />}
          />

           <Route element={<AdminRoute/>}>
            <Route path="/Dashboard" element={<Dashboard ping={ping}/>}>
                 <Route path="/Dashboard/event" element={<M_event ping={ping} setPing={setPing} />} />
                 <Route path="/Dashboard/activity" element={<M_activity ping={ping} setPing={setPing}/>} />
                 <Route path="/Dashboard/user" element={<M_user ping={ping} setPing={setPing}/>} />
            </Route>
           </Route>

           <Route element={<StudentsRoute/>}>

           </Route>
           <Route element={<SwitchRoutes/>}>
                <Route path="/switch" element={<Login/>} />
           </Route>

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
