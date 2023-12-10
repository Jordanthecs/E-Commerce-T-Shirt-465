import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const usersRef = collection(firestore, 'Users');
      const q = query(usersRef, where('email', '==', email), where('password', '==', password));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log('Document data:', doc.data());
          navigate('/shop');
        });
      } else {
        setErrorMessage('Invalid email or password'); // Set error message for invalid credentials
      }
    } catch (error) {
      console.error('Error getting documents:', error);
      setErrorMessage('Error occurred during login'); // Set error message for general error
    }
  };

  return (
    <body>
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <h2 className="h2-login">Login</h2>
          <div className="email">
            <label className="email-label">Email:</label>
            <input
              className="email-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label className="pass-label">Password:</label>
            <input
              className="pass-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="submit-button">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </body>
  );
};

export default Login;
