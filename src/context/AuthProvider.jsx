import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [session, setSession] = useState("test");
  const [userData, setUserData] = useState(null);

  async function getSession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (session) {
      setSession(session);
      setUserData(user);
    } else {
      setSession(false);
    }
  }

  async function signOutUser(){
    const { error } = await supabase.auth.signOut()
    if(error){
        return false;
    }
    return true;
  }

  
  useEffect(() => {
    getSession();
  }, []);

  return (
    <AuthContext.Provider value={{ session, userData, signOutUser }}>
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
