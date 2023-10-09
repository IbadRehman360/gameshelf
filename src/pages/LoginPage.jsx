import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

async function CheckAuth() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(null);

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
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") navigate("/");
    });
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="absolute relative  mx-auto flex h-[80vh] max-w-xl items-center justify-center bg-white p-6">
        <div className="w-full">
          <Auth
            supabaseClient={supabase}
            appearance={appearance}
            providers={["google"]}
            view="sign_in"
            redirectTo="http://localhost:5173/"
          />
          <Link
            to="/register"
            className="absolute  bg-transparent bg-gray-100 relative bottom-4 bottom-14 left-24 right-0  mb-2 mt-5 block h-8 w-80 text-center text-sm"
          >
            <span style={{ color: "transparent" }}>
              Don't have an account? Sign up here.
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

// bg-transparent
{
}
