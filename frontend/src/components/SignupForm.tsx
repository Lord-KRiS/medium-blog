import React, { useState } from "react";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";

function SignupForm() {

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-5 w-90">
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-bold">Create an Account</p>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Login
            </Link>
          </p>
        </div>
        <InputBox
          label="Username"
          placeholder="Enter your username"
          type="text"
        />
        <InputBox label="Email" placeholder="abc@gmail.com" type="email" />
        <InputBox label="Password" placeholder="" type="password" />
        <button className="bg-black text-white rounded p-2 font-medium text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
