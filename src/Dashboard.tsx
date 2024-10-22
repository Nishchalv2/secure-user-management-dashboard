import { useDispatch } from "react-redux";
import { logout } from "../src/store/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
