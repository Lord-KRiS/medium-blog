import React, { useState } from "react";
import InputBox from "./InputBox";
import { Link, useNavigate } from "react-router-dom";
import { type SignupInput } from "@lordkris/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        formData
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up " + error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-5 w-90 px-5 py-10 shadow-xl">
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
          label="Name"
          placeholder="Krrish Agarwal"
          type="text"
          onChange={(e) => setFormData((c) => ({ ...c, name: e.target.value }))}
        />
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
        <button
          onClick={onSubmitHandler}
          className="bg-black text-white rounded p-2 font-medium text-lg cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
