import React from 'react'
import { useSelector } from 'react-redux';
import '../../Style/Student.css'

const Students = () => {
  const users = useSelector((store) => store.user?.users);
  console.log(users)
  const Student = users.filter((e) => e.Status === 'Student' && e.level==="three");

  return (
    <div>
    <div className='card-student'>
        {Student?.map((el) => (
        <div className='student'>
          <div style={{ border_radius: "10%"}}>
            <img src={el?.Poster[0].url} alt={el.first_name}/></div>
          <br/><br/><br/>
          <div className='st-description'>
            <h2 >{el?.first_name} {el?.last_name}</h2>
            <h2 >{el?.Age} ans</h2>
        </div>
    </div>
      ))}
    </div>
    </div>
  )
}

export default Students