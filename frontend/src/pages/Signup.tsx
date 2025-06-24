import React from "react";
import Quote from "../components/Quote";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 flex justify-center">
        <SignupForm />
      </div>
      <div className="hidden md:flex">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
