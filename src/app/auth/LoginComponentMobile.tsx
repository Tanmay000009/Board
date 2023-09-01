import Image from "next/image";
import LoginForm from "./loginForm";

const LoginComponentMobile = () => {
  return (
    <div className="flex-grow bg-[#F8FAFF] h-full w-full px-8 gap-4 flex flex-col justify-center items-start  ">
      <h1 className="font-mont font-bold text-3xl  ">
        Sign in to your account
      </h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-4 justify-between font-mont font-normal text-xs ">
          <button className="flex flex-row justify-center items-center px-4 py-2 bg-white gap-2 rounded-lg hover:shadow transition duration-150">
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
    </div>
  );
};

export default LoginComponentMobile;
