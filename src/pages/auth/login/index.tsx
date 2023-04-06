import Link from "next/link";

import LoginForm from "../../../components/auth-forms/LoginForm";

import Image from "next/image";
import garageImg from "../../../../public/assets/img/garage.jpg";

const Login = () => {
  return (
    <div className="flex w-full text-center">
      <div className="w-6/12 h-screen relative pt-64">
        <div>
          <h2 className="pb-3 text-3xl">Welcome Back</h2>
          <p className="pb-8 text-sm">Please login to access your account.</p>
          {/* Login Form */}
          <div className="py-14">
            <LoginForm />
          </div>
          <div className="mt-4">
          <Link
              href="/auth/signup"
              className="hover:text-custom-purple hover:border-none border-none dark:text-white dark:hover:text-custom-purple"
            >
              Haven&apos;t got an account? Create one here.
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-6/12 h-screen">
        <div className="w-5/6 h-5/6 m-auto p-2 border-2 border-custom-purple rounded-2xl">
          <Image
            src={garageImg}
            alt="Image of a car workshop"
            className="h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
