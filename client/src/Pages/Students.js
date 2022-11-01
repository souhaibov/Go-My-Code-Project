import React from 'react'
import DataStudent from '../Components/DataStudents'
import '../Style/Student.css'

const Students = () => {
  return (
    <div>
    <div className='card-student'>
        {DataStudent?.map((el) => (
        <div className='student'>
          <div><img src="https://res.cloudinary.com/dh5a6dj9c/image/upload/v1666870571/students/Oubey_scdrvl.jpg" alt="oubey"/></div>
          <br/>
          <div className='st-description'>
            <h2 style={{color: 'green4'}}>Name: {el.name}</h2>
            <h2 style={{color: 'ForestGreen'}}>Age: {el.age}</h2>
        </div>
    </div>
      ))}
    </div>
    </div>
  )
}

export default Students