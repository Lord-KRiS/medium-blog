import React from "react";
import Quote from "../components/Quote";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center">
        <SignupForm />
      </div>
      <div className="hidden lg:flex">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
