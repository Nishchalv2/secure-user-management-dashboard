import { useDispatch, useSelector } from "react-redux";
import { login } from "../src/store/authSlice";
import { RootState } from "../src/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await dispatch(login({ email, password }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
        onClick={handleSignIn}
        className="bg-blue-500 text-white p-2 rounded w-80 hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </div>
  );
};

export default SignIn;
