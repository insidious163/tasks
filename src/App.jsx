import "./App.css";
import { Task } from "@components/Task/Task";
import { Login } from "@components/Auth/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@components/Auth/ProtectedRoute/ProtectedRoute.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Task />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export { App };
