import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { firestore } from '../firebase';
import { CartContext } from '../CartContext';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0); // Initialize total as 0 initially
  const [name, setName] = useState(''); // State to hold the user's name

  const ref = collection(firestore, 'Orders');
  const emailRef = useRef();
  const addressRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalFromURL = searchParams.get('total');

    setTotal(parseFloat(totalFromURL || 0));
  }, [location.search]);

  const handleCardNumberChange = async (e) => {
    e.preventDefault();
    const usersRef = collection(firestore, 'Users');
    const q = query(usersRef, where('email', '==', emailRef.current.value));

    const formattedCardNumber = cardNumber.replace(/\D/g, '');

    if (formattedCardNumber.length !== 16 || isNaN(formattedCardNumber)) {
      setErrorMessage('Card number should be a 16-digit number.');
      return;
    }

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log('Document data:', doc.data());
          const userDoc = doc.data();
          setName(userDoc.name); // Update the state with the retrieved name

          let userData = {
            name: userDoc.name, // Use the state value for user's name
            email: emailRef.current.value,
            address: addressRef.current.value,
            cartItems: cartItems,
            card: formattedCardNumber,
            total: total,
          };

          console.log(userData);

          addDoc(ref, userData);
          navigate('/shop');
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <body>
      <div className="login-card">
        <form onSubmit={handleCardNumberChange}>
          <h2 className="h2-login">Checkout</h2>
          <div className="email">
            <label className="email-label">Email:</label>
            <input
              className="email-field"
              type="email"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="address">
            <label className="address-label">Address:</label>
            <input
              className="address-field"
              type="address"
              value={address}
              ref={addressRef}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="card">
            <label className="card-label">Card Number:</label>
            <input
              className="card-field"
              name="cardNumber"
              value={cardNumber}
              ref={cardRef}
              onChange={(e) => setCardNumber(e.target.value
              .replace(/[^\dA-Z]/g, '')
              .replace(/(.{4})/g, '$1 ')
              .trim())}
              required
            />
          </div>
          <div className="submit-button">
            <button className="login-button" type="submit">
              Checkout
            </button>
          </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </body>
  );
};

export default Checkout;