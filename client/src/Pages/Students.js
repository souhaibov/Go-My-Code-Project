import React from 'react'
import { useSelector } from 'react-redux';
import '../Style/Student.css'

const Students = () => {
  const users = useSelector((store) => store.user?.users);
  console.log(users)
  const Student = users.filter((e) => e.Status === 'Student');

  return (
    <div>
    <div className='card-student'>
        {Student?.map((el) => (
        <div className='student'>
          <div><img src={el?.Poster[0].url} alt={el.first_name}/></div>
          <br/>
          <div className='st-description'>
            <h2 style={{color: 'green4'}}>First Name: {el?.first_name}</h2>
            <h2 style={{color: 'ForestGreen'}}>Last Name: {el?.last_name}</h2>
            <h2 style={{color: 'green4'}}>Age: {el?.Age}</h2>
        </div>
    </div>
      ))}
    </div>
    </div>
  )
}

export default Students