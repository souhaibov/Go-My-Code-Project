import React from 'react'
import "../Style/StudentDash.css"

const StudentDash = () => {
  return (
    <div>
        <br/>
        <h1>Weekly Quiz</h1>
        <div className='quiz_position'>
            <div className='position'>
            <br/>
            <h2>White to play and mate in 2 moves</h2>
            <img src="mate_in_2.jpg" alt=''/>
            <br/><br/>
            </div>
            <div className='position'>
            <br/>
            <h2>White to play and mate in 3 moves</h2>
            <img src="mate_in_3.jpg" alt=''/>
            <br/><br/>
            </div>
            
            <div className='position'>
            <br/>
            <h2>White to play and mate in 6 moves</h2>
            <img src="mate_in_6.jpg" alt=''/>
            <br/><br/>
            </div>
            <div className='position'>
            <br/>
            <h2>White to play and make a Draw</h2>
            <img src="white_to_draw.jpg" alt=''/>
            <br/><br/>
            </div>
        </div>
    </div>
  )
}

export default StudentDash