import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <>
      <div className="bg-gray-50 flex min-h-full flex-1 flex-col justify-center pt-[50px] pb-[100px] sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md "></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]  ">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 border border-gray-100">
            <form className="space-y-6" action="#" method="POST">
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-navy-blue focus:ring-navy-blue"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-navy-blue hover:text-navy-blue"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-navy-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#323447] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
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
            Not a member?
            <a
              href="/register"
              className="font-semibold leading-6 text-navy-blue hover:text-[#4b4e6b]"
            >
              Sign Up!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
