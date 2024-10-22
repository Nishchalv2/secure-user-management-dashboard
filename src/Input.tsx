import React from "react";

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input = ({ type, value, onChange, placeholder }: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border p-2 mb-4 w-80"
  />
);

export default Input;
