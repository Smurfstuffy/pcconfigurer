import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      login(storedUser);
    }
  }, []);

  const login = (loggedInUser) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <UserContext.Provider value={{ user, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}