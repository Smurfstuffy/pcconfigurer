import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      validateUser(storedUser);
    }
  }, []);

  const validateUser = async (validatingUser) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/verifytoken',
        headers: {
          'Authorization': 'Bearer ' + validatingUser.token,
        },
      });
      login(response.data);
    } catch (error) {
      logout();
    }
  };

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