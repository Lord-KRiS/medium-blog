import React, { useState } from "react";
import InputBox from "./InputBox";
import { Link, useNavigate } from "react-router-dom";
import { type SigninInput } from "@lordkris/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

function SigninForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SigninInput>({
    email: "",
    password: "",
  });

  const onSubmitHandler = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        formData
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing in " + error);
    }
  };

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
        <button
          onClick={onSubmitHandler}
          className="bg-black text-white rounded p-2 font-medium text-lg cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SigninForm;
