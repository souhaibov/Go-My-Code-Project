import React from 'react'
import { Link } from 'react-router-dom'
import DataManage from '../../Components/DataManaging2012'
import '../../Style/managing.css'

const Managing2012 = () => {
  return (
  <div>
    <ul class="managing-navbar">
    <Link to='/Managing2012'><li>2012</li></Link>
    <Link to='/Managing2018'><li>2018</li></Link>
    <Link to='/Managing2020'><li>2020</li></Link>
    <Link to='/Managing2022'><li>2022</li></Link>
</ul>
     <br />
  <h1>Club Officials Season 2012</h1>
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

export default Managing2012