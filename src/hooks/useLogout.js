import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  return { logout };
};
