import React from 'react'
import CommentAnswer from '../Comments/Comment-answer'
import "../Style/StudentDash.css"

const StudentDash = () => {
  return (
    <div>
        <br/>
        <div className='wisdom'>
          <h2>¸,ø¤º°`°º¤ø,¸¸,ø¤º°    🎀   𝒞𝒽𝑒𝓈𝓈 𝒲𝒾𝓈𝒹๏𝓂   🎀    °º¤ø,¸¸,ø¤º°`°º¤ø,¸
 </h2>
 {/* 🍫😈  𝔠𝓗ｅ𝓢𝔰 ｗ𝐈𝓼𝓓๏Ｍ  🎉👣 */}
 <br/>
          <h2>Emmanuel Lasker : "When you see a good move, look for a better one!"</h2>
        </div>
        {/* <h1>Weekly Quiz</h1> */}
        <div className='quiz_position'>
            <div className='position'>
            <br/>
            <h2>White to play and mate in 2 moves</h2>
            <img src="mate_in_2.jpg" alt=''/>

            <div className='answer-comment'>
            <CommentAnswer/>
            </div>
            <br/>
            </div>
            <div className='position'>
            <br/>
            <h2>White to play and mate in 3 moves</h2>
            <img src="mate_in_3.jpg" alt=''/>
            <div className='answer-comment'>
            <CommentAnswer/>
            </div>
            <br/>
            </div>
            
            <div className='position'>
            <br/>
            <h2>White to play and mate in 6 moves</h2>
            <img src="mate_in_6.jpg" alt=''/>
            <div className='answer-comment'>
            <CommentAnswer/>
            </div>
            <br/>
            </div>
            <div className='position'>
            <br/>
            <h2>White to play and make a Draw</h2>
            <img src="white_to_draw.jpg" alt=''/>
            <div className='answer-comment'>
            <CommentAnswer/>
            </div>
            <br/>
            </div>
        </div>
    </div>
  )
}

export default StudentDash