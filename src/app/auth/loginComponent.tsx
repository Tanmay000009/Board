import Image from "next/image";
import LoginForm from "./loginForm";

const LoginComponent = () => {
  return (
    <div className="basis-1/2 bg-[#F8FAFF] h-full w-full  p-16 2xl:p-24 flex flex-col justify-center items-start  ">
      <h1 className="font-mont font-bold text-4xl  ">Sign In</h1>
      <h2 className="mt-2 mb-6 text-base 2xl:text-lg">
        Sign in to your account
      </h2>
      <div className="flex flex-col w-10/12 2xl:w-3/4">
        <div className="flex flex-row gap-8 justify-between font-mont font-normal text-xs ">
          <button className="flex flex-row justify-center items-end px-4 py-2 bg-white gap-2 rounded-lg hover:shadow transition duration-150">
            <Image
              src="/icons/google.svg"
              alt="google"
              width={20}
              height={20}
            />
            <span className="text-[#858585] px-2 tracking-wide text-sm 2xl:text-base">
              Sign in with Google
            </span>
          </button>
          <button className="flex flex-row justify-center items-end px-4 py-2 bg-white gap-2 rounded-lg hover:shadow transition duration-150">
            <Image src="/icons/apple.svg" alt="google" width={20} height={20} />
            <span className="text-[#858585] px-2 tracking-wide text-sm 2xl:text-base">
              Sign in with Apple
            </span>
          </button>
        </div>
        <LoginForm mobile={false} />
      </div>
    </div>
  );
};

export default LoginComponent;
