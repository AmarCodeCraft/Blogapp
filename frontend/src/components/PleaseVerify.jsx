import React from 'react';
import { Link } from 'react-router-dom';

function PleaseVerify() {
  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-5">Please Verify Your Email</h1>
      <p className="mb-5">
        We've sent a verification link to your email address. Please check your inbox and click the link to complete your registration.
      </p>
      <p>
        Already verified? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
}

export default PleaseVerify;
