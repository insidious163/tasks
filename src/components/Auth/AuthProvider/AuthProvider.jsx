import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "@/LocalStorage.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const getUserFromCookies = () => {
  const url = import.meta.env.VITE_SERVER_URL + "auth/user";
  const headers = {
    "Content-Type": "application/json",
  };
  axios
    .get(url, { headers })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", getUserFromCookies());
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
