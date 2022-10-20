import React from 'react'
import { useSelector } from 'react-redux'
import ActivityCard from './ActivityCard'
import "./M_activity.css"

const M_activity = () => {
  
  const data=useSelector((store)=>store.activity.Activity)

  return (
    <div className='activity_data'>
     <br/><h2>Activities List</h2><br/>
        <div className='activity_list'>
           
                <table width="100%">
                <tr>
                  <th >Number of Students</th>
                  <th >Picture</th>
                  <th >Workspace</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                

{data?.map((el,i)=>(<ActivityCard key={i} el={el}/>))}

</table>
        </div>
    </div>
  )
}

export default M_activity