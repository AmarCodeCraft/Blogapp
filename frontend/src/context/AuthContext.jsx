import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
        try {
          const res = await axios.get("/api/auth");
          setUser(res.data);
        } catch {
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    axios.defaults.headers.common["x-auth-token"] = res.data.token;
    const userRes = await axios.get("/api/auth");
    setUser(userRes.data);
  };

  const register = async (name, email, password) => {
    const res = await axios.post("/api/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    axios.defaults.headers.common["x-auth-token"] = res.data.token;
    const userRes = await axios.get("/api/auth");
    setUser(userRes.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["x-auth-token"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
