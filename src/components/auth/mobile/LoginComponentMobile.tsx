"use client";

import Image from "next/image";
import LoginForm from "../loginForm";
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../../app/utils/firebase";
import { useRouter } from "next/navigation";

const LoginComponentMobile = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // redirect to dashboard if user is logged in
  useEffect(() => {
    if (auth.currentUser) {
      router.push("/dashboard");
    }
  }, []);

  const googleLogin = async () => {
    setLoading(true);
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        console.log("Result", result);

        router.push("/dashboard");
      })
      .catch((error) => {
        console.log("Error", error);

        toast.error("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="flex-grow bg-[#F8FAFF] h-full w-full px-8 gap-4 flex flex-col justify-center items-start  ">
      <h1 className="font-mont font-bold text-3xl  ">
        Sign in to your account
      </h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-4 justify-between font-mont font-normal text-xs ">
          <button
            onClick={googleLogin}
            className="flex flex-row justify-center items-center px-4 py-2 bg-white gap-2 rounded-lg hover:shadow transition duration-150"
          >
            <Image
              src="/icons/google.svg"
              alt="google"
              width={20}
              height={20}
            />
            <span className="text-[#858585] px-2 tracking-wide text-sm">
              Sign in with Google
            </span>
          </button>
          <button className="flex flex-row justify-center items-end px-4 py-2 bg-white gap-2 rounded-lg hover:shadow transition duration-150">
            <Image src="/icons/apple.svg" alt="google" width={20} height={20} />
            <span className="text-[#858585] px-2 tracking-wide text-sm">
              Sign in with Apple
            </span>
          </button>
        </div>
        <LoginForm mobile={true} />
      </div>
      {loading && (
        <div className="bg-black opacity-70 z-50 fixed top-0 left-0 h-screen w-screen ">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="h-16 w-16 animate-spin-slow rounded-full border-4 border-dashed border-[#3C83F9] "></div>
            <h2 className="font-mont text-center text-white text-xl font-semibold">
              Loading...
            </h2>

            <p className="font-mont font-normal w-2/3 text-center text-white">
              This may take a few seconds, please dont close this page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComponentMobile;
