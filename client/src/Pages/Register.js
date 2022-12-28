import React, { useRef, useState } from "react";
import "../Style/Register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/userSlice/userSlice";


const Register = () => {

  const inputRef = useRef(null);

  function handleClick() {
    // 👇️ update input value
    inputRef.current.value = 'New value';
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('*Passwords do not match');
      return;
    }

    // Submit the form
  }

  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit}>
    <div className="register-card">
      <img src="logo.png" alt="logo" />
      <br />
      <br />
      <h3>First Name* :</h3>

      <input
       ref={inputRef}
        placeholder="Enter your first name"
        onChange={(e) =>
          setRegister({ ...register, first_name: e.target.value })
        }
      />
      <br />
      <br />
      <h3>Last Name* :</h3>

      <input
       ref={inputRef}
        placeholder="Enter your last name"
       
        onChange={(e) =>
          setRegister({ ...register, last_name: e.target.value })
        }
      />
      <br />
      <br />
      <h3>Phone Number :</h3>

      <input
        type="number"
        maxLength="14"
        ref={inputRef}
        placeholder="Enter your phone number"
        onChange={(e) =>
          setRegister({ ...register, phone_number: e.target.value })
        }
      />
      <br />
      <br />
      <h3>Email* :</h3>

      <input
        type="email"
        ref={inputRef}
        placeholder="Enter your E.mail"
        onChange={(e) => setRegister({ ...register, email: e.target.value })}
      />
      <br />
      <br />
      <div className="confirm-password">
      <h3>Password* :</h3>

      <input
        type="password"
        ref={inputRef}
        value={password}
        placeholder="Enter your password"
        onChange={(e) =>{
          setPassword(e.target.value) 
         }
        }
      />
      
      <br />
      <h3>Confirm Password* :</h3>
      <input
        type="password"
        ref={inputRef}
        value={confirmPassword}
        placeholder="Confirm your password"
        onChange={(e) =>{
          setConfirmPassword(e.target.value); 
          setRegister({ ...register, password: e.target.value })}
        }
      />
      {error && <p>{error}</p>}
      </div>
      <br />
      <br />
      {/* <Link to="/login"> */}
        <button
          className="submit_signup"
          onClick={() => {
            dispatch(userRegister(register));handleClick();
            
          }}
        >
          Register
        </button>
      {/* </Link> */}
      <br />
      <br />
      <Link to="/Login">
       
        <button className="submit_signin">Login</button>
      </Link>
    </div>
    </form>
  );
};

export default Register;
