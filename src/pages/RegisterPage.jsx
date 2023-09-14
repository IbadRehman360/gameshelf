import supabase from "../services/supabase";
import { useState , useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { HiXCircle } from "react-icons/hi";
import {useForm} from "react-hook-form";
import PasswordStrengthBar from "react-password-strength-bar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Navigate, useNavigate } from "react-router-dom";

//Quick hack to fix later
async function CheckAuth() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export default function RegisterPage() {
  const [isLogged, setIslogged] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const navigate = useNavigate();
  
  const {handleSubmit} = useForm();

  function checkPasswordErrors() {
    setCheckPassword(true);
    if (confirmPassword.length < 8) return true;
    if (password != confirmPassword) return true;
    setCheckPassword(false);
  }

  useEffect(() => {
    CheckAuth().then((data) => {
      if (data) {
        setIslogged(true);
      } else {
        setIslogged(false);
      }
    });
  }, []);


  async function handleSignUp(){
    const { data } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(data){
      navigate("/login");
    }
  }

  if (isLogged === null) return <></>;
  if (isLogged) return <Navigate to="/" />;
  return (
    <>
      <Header />
      <div className="bg-gray-50 flex min-h-full flex-1 flex-col justify-center  pt-[40px] pb-[80px]  py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h3 className="text-3xl text-center justify-center  font-bold flex "></h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      checkPasswordErrors();
                    }}
                    onBlur={checkPasswordErrors}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 mb-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <PasswordStrengthBar
                    password={confirmPassword}
                    scoreWordClassName="capitalize"
                  />
                </div>
              </div>
              {checkPassword && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <HiXCircle
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        There were 2 errors
                      </h3>

                      <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                          {confirmPassword.length < 8 && (
                            <li>Your password must be at least 8 characters</li>
                          )}
                          {confirmPassword != password && (
                            <li>Your password does not match</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-navy-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#323447] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full border-[1px] border-gray-400 items-center justify-center gap-3 rounded-md bg-white text-black px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <FcGoogle />
                  <span className="text-sm font-semibold leading-6">
                    Google
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 flex gap-2 justify-center items-center text-center text-sm text-gray-500">
            Already a member?
            <a
              href="/login"
              className="font-semibold leading-6 text-navy-blue hover:text-[#4b4e6b]"
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
