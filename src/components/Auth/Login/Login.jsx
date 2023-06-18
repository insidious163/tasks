import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useAuth } from "@components/Auth/AuthProvider/AuthProvider.jsx";

import styles from "./Login.module.css";

const Login = () => {
  const auth = useAuth();
  const handleChangeUser = ({ data }) => {
    auth.login(data);
  };

  const login = useGoogleLogin({
    onSuccess: ({ code }) => {
      const url = import.meta.env.VITE_SERVER_URL + "auth/login";
      const headers = {
        "Content-Type": "application/json",
        X_AUTH_CODE: code,
      };
      axios
        .post(url, null, { headers })
        .then((response) => {
          handleChangeUser(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    flow: "auth-code",
  });

  return (
    <div className={styles.root}>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
};

export { Login };
