import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Navigate } from "react-router";
import "./Comment.css";

const Comment = () => {
  const user = useSelector((store) => store.user?.user);
  // const isAuth = localStorage.getItem("token");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    //  isAuth ?
    <div className="main-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">share your opinion</h3>
       
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="inputs-box"
        />

        <button onClick={onClickHandler} className="comment-button">
          Comment
        </button>
      </div>
     
      {comments.map((text) => (
        <div className="comment-container">{user?.user?.first_name} {user?.user?.last_name} : {text}</div>
     
    
     ))}
    
    </div>
    // :<Navigate to={"/Register"}/>
  );
};

export default Comment;
