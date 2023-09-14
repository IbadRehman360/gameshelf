import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [userData, setUserData] = useState(null);

  async function getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setSession(session);
      setIsAuth(true);
      setUserData(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    getSession();
  }, []);

  if (!isLoading)
    return (
      <AuthContext.Provider
        value={{ isLoading, isAuth, session, userData, signOutUser }}
      >
        {children}
      </AuthContext.Provider>
    );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) return "Error, context being used out of provider";
  return context;
}

export { useAuth, AuthProvider };
