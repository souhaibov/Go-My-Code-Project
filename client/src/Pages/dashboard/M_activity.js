import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity } from '../../Redux/userSlice/activitySlice'
import AddFiles from '../UploadImg'
import ActivityCard from './ActivityCard'
import "./M_activity.css"

const M_activity = ({ping,setPing}) => {
  
  const data=useSelector((store)=>store.activity.Activity)

  const [show, setShow] = useState(false);
  const [activity, setActivity] = useState({
    NumberOfStudents: "",
    tof: [],
    place: "",
    classDate:"",
  });

  const dispatch = useDispatch();

  return (
    <div className='activity_data'>
     <br/>
     <h2>Activities List</h2>
     <br/>
     <button onClick={() => setShow(!show)}>Add a New Activity</button>
      <br />
      {show ? (
        <div>
          <div id="form" class="topBefore">
            <div className="info">
              <input
                type="number"
                placeholder="Number Of Students"
                onChange={(e) =>
                  setActivity({ ...activity, NumberOfStudents: e.target.value })
                }
              />
           

              <input
                type="text"
                placeholder="the Place of the Activity"
                onChange={(e) =>
                  setActivity({ ...activity, place: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="the date of the class lesson"
                onChange={(e) =>
                  setActivity({ ...activity, classDate: e.target.value })
                }
              />
                              <AddFiles setActivity={setActivity} activity={activity} />

              </div>
              
               <button className={`${activity.tof.length===0 || activity.NumberOfStudents==="" || activity.place==="" || activity.classDate==="" ? "disabled_button" : "" }`} disabled={activity.tof.length===0 || activity.NumberOfStudents==="" || activity.place==="" || activity.classDate===""}
              onClick={() => {
                dispatch(postActivity(activity));
                setShow(false)
                setPing(!ping)}}>
              Submit
            </button>
          </div>
        </div> 
      ) : null}
      <br />

        <div className='activity_list'>
           
                <table width="100%">
                <tr>
                  <th >Number of Students</th>
                  <th >Picture</th>
                  <th >Workspace</th>
                  <th >Date of the Class</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                

{data?.map((el,i)=>(
<ActivityCard key={i} el={el} ping={ping} setPing={setPing}/>))}

</table>
        </div>
    </div>
  )
}

export default M_activity