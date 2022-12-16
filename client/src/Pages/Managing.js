import React from 'react'
import DataManage from '../Components/DataManaging'
import '../Style/managing.css'

const Managing = () => {
  return (
  <div>
     <br />
  <h1>Club Officials Season 2022</h1>
    <div className='card-manager'>
      
      
        {DataManage?.map((el) => (
        <div className='manager'>
          <div><img src={el.photo} alt={el.name}/></div>
          <br/>
          <div className='mn-description'>
            <h2 >Name: {el.name}</h2>
            <br />
            <h2 >Post : {el.job}</h2>
        </div>
    </div>
      ))}
    </div>
    </div>
  )
}

export default Managing