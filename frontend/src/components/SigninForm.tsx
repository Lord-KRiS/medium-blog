import React, { useState } from "react";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";
import { type SigninInput, type SignupInput } from "@lordkris/medium-common";

function SigninForm() {
  const [formData, setFormData] = useState<SigninInput>({
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-5 w-90 px-5 py-10 shadow-xl">
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-bold">Login to your account</p>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Create
            </Link>
          </p>
        </div>
        <InputBox
          label="Email"
          placeholder="krrish@gmail.com"
          type="email"
          onChange={(e) =>
            setFormData((c) => ({ ...c, email: e.target.value }))
          }
        />
        <InputBox
          label="Password"
          type="password"
          onChange={(e) =>
            setFormData((c) => ({ ...c, password: e.target.value }))
          }
        />
        <button className="bg-black text-white rounded p-2 font-medium text-lg">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SigninForm;
