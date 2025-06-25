import { type ChangeEvent } from "react";

interface InputElementsType {
  label: string;
  placeholder?: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ label, placeholder, type, onChange }: InputElementsType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        className="w-full border border-gray-400 rounded p-2"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
