import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function UserAuth() {
  const userState = useSelector((state) => state.user);
  return userState.name ? <Outlet /> : <Navigate replace to={"/SignIn"} />;
}
