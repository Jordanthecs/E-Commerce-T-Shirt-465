import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const ref = collection(firestore, 'Users');
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();

    let userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    console.log(userData);

    try {
      await addDoc(ref, userData);
      navigate('/login');
    } catch (e) {
      console.log(e);
      setErrorMessage('Error signing up. Please try again.');
    }
  };

  return (
    <body>
      <div className="login-card">
        <form onSubmit={handleSignup}>
          <h2 className="h2-login">Sign Up</h2>
          <div className="name">
            <label className="name-label">Name:</label>
            <input
              className="name-field"
              ref={nameRef}
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <label className="email-label">Email:</label>
            <input
              className="email-field"
              ref={emailRef}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label className="pass-label">Password:</label>
            <input
              className="pass-field"
              ref={passRef}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="submit-button">
            <button className="login-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </body>
  );
};

export default Signup;
