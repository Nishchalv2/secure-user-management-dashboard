import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../src/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default PrivateRoute;
