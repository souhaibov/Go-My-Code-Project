import React from 'react'
import DataInstructors from '../Components/DataInstructors'
import '../Style/Instructors.css'

const Instructors = () => {
  return (
    <div>
      <br/>
      <h1>Coachs</h1>
      <br/>
    <div className='card-instructors'>
        {DataInstructors?.map((el) => (
        <div className='instructor'>
         <img src={el.poster} alt={el.name} />
         
          <div className='description'>
        
          <h1>{el.name}</h1>
          <br/><br/>
          <h2>{el.Statue}</h2>
          <br/><br/>
          <p>{el.description}</p>
          <br/>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Instructors