import React from 'react';
import RegisterForm from '../component/RegisterForm';
import SignIn from '../component/SignIn';

const SignInPage = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap">
        <SignIn />
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignInPage;
