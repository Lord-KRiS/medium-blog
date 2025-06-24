import React from "react";

interface InputElementsType {
  label: string;
  placeholder: string;
  type: string;
}

function InputBox({ label, placeholder, type }: InputElementsType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        className="w-full border border-gray-400 rounded p-2"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
