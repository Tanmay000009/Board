"use client";

import { useState } from "react";

const LoginForm = ({ mobile }: { mobile: boolean }) => {
  const [emailInputActive, setEmailInputActive] = useState(false);
  const [passwordInputActive, setPasswordInputActive] = useState(false);
  return (
    <div
      className={`text-black mt-${
        mobile ? 4 : 10
      } flex-grow-0 flex flex-col rounded-lg gap-4`}
    >
      <div className="flex flex-col bg-white rounded-lg p-8 items-center justify-center">
        <div className="w-full rounded-lg  ">
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className={
                  "block mb-2 font-medium " + (mobile ? " text-sm " : "")
                }
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={
                  "border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " +
                  (emailInputActive ? " bg-[#EAEAEA] " : " bg-[#F5F5F5] ")
                }
                placeholder="name@company.com"
                required
                onFocus={() => setEmailInputActive(true)}
                onBlur={() => setEmailInputActive(false)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={
                  "block mb-2 font-medium " + (mobile ? " text-sm " : "")
                }
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className={
                  "border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " +
                  (passwordInputActive ? " bg-[#EAEAEA] " : " bg-[#F5F5F5] ")
                }
                required
                onFocus={() => setPasswordInputActive(true)}
                onBlur={() => setPasswordInputActive(false)}
              />
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-medium tracking-wide text-[#346BD4] hover:underline "
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#4285F4] hover:bg-[#286DE0] focus:ring-4 focus:outline-none focus:ring-primary-300 font-mont font-bold rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <p className="tracking-wide flex flex-row justify-center  text-sm font-light text-gray-500 ">
        Don’t have an account?{" "}
        <a
          href="#"
          className="ml-1 font-medium text-primary-600 hover:underline text-[#346BD4] "
        >
          {" "}
          Register here
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
