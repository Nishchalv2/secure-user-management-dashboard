import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../src/store/authSlice";
import { RootState } from "../src/store";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await dispatch(register({ email, password }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-80"
      />
      <button
        onClick={handleSignUp}
        className="bg-green-500 text-white p-2 rounded w-80 hover:bg-green-600"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUp;
