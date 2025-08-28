// /* eslint-disable react-refresh/only-export-components */
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   role: "USER" | "AGENT" | "ADMIN";
//   token: string;
// }

// interface AuthContextType {
//   user: User | null;
//   setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
//   login: (data: { token: string; user: Omit<User, "token"> }) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("authUser");
//     if (storedUser) {
//       const parsed = JSON.parse(storedUser);
//       setUser({ ...parsed.user, token: parsed.token });
//     }
//   }, []);

//   const login = (data: { token: string; user: Omit<User, "token"> }) => {
//     const userWithToken = { ...data.user, token: data.token };
//     setUser(userWithToken);
//     localStorage.setItem("authUser", JSON.stringify(data));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("authUser");
//   };
// const [authUser, setAuthUser] = useState<User | null>(null);
//   return (
    
//     <AuthContext.Provider
//       value={{ user: authUser, login, setAuthUser, logout, isAuthenticated: !!user }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };


import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "USER" | "AGENT" | "ADMIN";
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: { token: string; user: Omit<User, "token"> }) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({ ...parsed.user, token: parsed.token });
    }
  }, []);

  const login = (data: { token: string; user: Omit<User, "token"> }) => {
    const userWithToken = { ...data.user, token: data.token };
    setUser(userWithToken);
    localStorage.setItem("authUser", JSON.stringify({ token: data.token, user: data.user }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
