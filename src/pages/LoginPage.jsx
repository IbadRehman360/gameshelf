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
  useEffect(() => {
    const linkElements = document.querySelectorAll(".c-dumjqv");

    if (linkElements.length >= 2) {
      linkElements[1].remove();
      linkElements[0].remove();
    }
  });

  return (
    <div>
      <Header />
      <div className=" sm:mx-auto  flex h-[80vh] max-w-xl items-center justify-center px-4 bg-white sm:p-6">
        <div className="w-full">
          <Auth
            supabaseClient={supabase}
            appearance={appearance}
            providers={["google"]}
            view="sign_in"
            redirectTo="http://localhost:5173/"
          />
          <div className="flex justify-center items-start">
            <Link
              to="/register"
              className="text-center ml-2 -mt-3 tracking-wide text-gray-500 text-[0.84rem] underline hover:text-gray-500 w-60 sm:w-80"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// bg-transparent
