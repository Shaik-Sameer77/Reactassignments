import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import './OTPGenerator.css'

// Create a function component called OTPGenerator
function OTPGenerator() {

  // Define state variables for mobile number and error message using the useState hook
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Define a function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate mobile number using a regular expression
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {

      // If the mobile number is invalid, set an error message and return  
      setErrorMessage('Invalid mobile number. Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    // If the mobile number is valid, make an API call to generate an OTP
    try {
      const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Send the mobile number in the request body as an integer
        body: JSON.stringify({
          mobile: parseInt(mobile, 10)
        })
      });

      // Parse the response data as JSON
      const data = await response.json();

      // If the API call is successful and a transaction ID is returned, clear the mobile number and error message and show an alert message
      if (response.status === 200 && data.txnId) {
        setMobile('');
        setErrorMessage('');
        alert('OTP sent successfully!');
      } else {
        // If the API call is unsuccessful or no transaction ID is returned, set an error message
        setErrorMessage('Failed to generate OTP. Please try again later.');
      }
    } catch (error) {
      // If an error occurs during the API call, set an error message
      setErrorMessage('Failed to generate OTP. Please try again later.');
    }
  };
  
  // Define a function to handle changes to the mobile number input field
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  
  // Render a form that allows the user to enter a mobile number and generate an OTP, with error message displayed if any
  return (
    <div>
      <h2>Generate OTP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobile">Mobile Number:</label>
        <Input
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={handleMobileChange}
          required
          pattern="[6-9][0-9]{9}" // Validate the mobile number input using a regular expression
        />
        <Button type="submit">Generate OTP</Button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

// Export the OTPGenerator component as the default export
export default OTPGenerator;
