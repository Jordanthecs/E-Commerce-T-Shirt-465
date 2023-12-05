import React from 'react';

const Contact = () =>{
  return (
    <body>
      <div class = "contact">
        <div class = "contact-desc">
        <h2 class = "contact-me">Contact Me</h2>
      <div className="contact-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone:</strong> +1 123-456-7890</p>
        <p><strong>Address:</strong> 1234 Example St, City, Country</p>
      </div>
  <h3 class = "about-h3">The Computer Code Wars Team</h3>
        </div>
        </div>
        <div class = "footer">
          <footer>
            <div>
              {/* Footer content goes here */}
              <p class = "copy">&copy; 2023 Your Website. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
    </body>
  );
}
export default Contact;