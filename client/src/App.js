import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Events from "./Pages/Events";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Login from "./Pages/Login";
import DataStudent from "./Components/DataStudents";
import { useEffect, useState /*,settext*/ } from "react";
import Students from "./Pages/Students";
import Instructors from "./Pages/Instructors";
import DataInstructors from "./Components/DataInstructors";
import Managing from "./Pages/Managing";
import DataManage from "./Components/DataManaging";
import Register from "./Pages/Register";
import {useDispatch} from "react-redux";
import { userCurrent } from "./Redux/userSlice/userSlice";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./route/PrivateRoute";
import M_event from "./Pages/dashboard/M_event";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);
  //   return () => {

  //   }

  const [Datastudent /*setStudent*/] = useState(DataStudent);
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
              <Students
                /*settext={settext}*/ DataStudent={
                  Datastudent
                } /*Students={Students}*/
              />
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

           <Route element={<PrivateRoute/>}>
            <Route path="/Dashboard" element={<Dashboard />}>
                 <Route path="/Dashboard/Event" element={<M_event/>} />
            </Route>
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
