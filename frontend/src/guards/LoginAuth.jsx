import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function LoginAuth() {
  const userState = useSelector((state) => state.user);
  return userState ? <Navigate replace to={"/"} /> : <Outlet />;
}
