import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Comment-answer.css";

const CommentAnswer = () => {
  const user = useSelector((store) => store.user?.user);
//   const isAuth = localStorage.getItem("token");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="answer-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">Think well and take your time</h3>
        <textarea
          placeholder="Put your answer here..."
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />

        <button onClick={onClickHandler} className="comment-button">
          Answer
        </button>
      </div>
     
      {comments.map((text) => (
        <div className="comment-container">{user?.user?.first_name} {user?.user?.last_name} : {text}</div>
     
    
     ))}
    
    </div>
  );
};

export default CommentAnswer;
