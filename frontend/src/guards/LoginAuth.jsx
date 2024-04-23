import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function LoginAuth() {
  const userState = useSelector((state) => state.user);
  return userState.length >= 1 ? <Navigate replace to={"/"} /> : <Outlet />;
}
