import React from 'react'
import { useSelector } from 'react-redux'
import "../Style/activities.css"
const Activities = () => {

  const activity = useSelector((store) => store.activity?.Activity);



  return (
    <div>
      <br/>
      <h1>
        Training sessions 
      </h1>
      <br/>
            <div className='card-Activities'>
        {activity?.map((el,i) => (
        <div key={i} className='Activities'>
          <br/><br/>
           <h2 style={{fontSize:"36px",color: 'darkgreen'}}>【﻿Work Space】: {el?.place}</h2>
           <br/>
           <h2 style={{color: 'darkgreen',fontSize:"32px"}}>𝓝𝓾𝓶𝓫𝓮𝓻 𝓞𝓯 𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 : {el?.NumberOfStudents}</h2>
           <br/>
           <div className='list_tof_act'>
           {el?.tof?.map((tofa,i)=><img key={i} src={tofa?.url} alt='' />)}
          <br/>
          </div>
          <div className='st-description'>
           
            
            
        </div>
    </div>
      ))}
    </div>
      
      
      
    </div>
  )
}

export default Activities