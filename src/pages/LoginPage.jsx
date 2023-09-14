import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

//Quick hack to fix later
async function CheckAuth() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLogged, setIslogged] = useState(null);
  
  const appearance = {
    theme: ThemeSupa,
    variables: {
      default: {
        colors: {
          brand: "#242633",
          brandAccent: "#3b404e",
        },
      },
    },
  };

  useEffect(() => {
    CheckAuth().then((data) => {
      if (data) {
        setIslogged(true);
      } else {
        setIslogged(false);
      }
    });
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") 
      navigate("/")
    });
  }, []);

  if (isLogged === null) return <></>;
  if (isLogged) return <Navigate to="/" />;
  return (
    <>
      <Header />
      <div className="max-w-xl p-6 mx-auto h-[80vh] flex justify-center items-center">
        <div className="w-full">
          <Auth
            supabaseClient={supabase}
            appearance={appearance}
            providers={["google"]}
            view="sign_in"
            redirectTo="http://localhost:5173/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
