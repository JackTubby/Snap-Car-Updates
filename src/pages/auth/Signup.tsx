import SignupForm from "../../components/auth-forms/SignupForm";

import Image from "next/image";
import garageImg from "../../../public/assets/img/garage.jpg";

const Signup = () => {
  return (
    <>
      <div className="flex w-full text-center">
        <div className="w-6/12 h-screen relative pt-64">
          <h2 className="pb-3 text-3xl">Create an Account</h2>
          <p className="pb-8 text-sm">
            Let&apos;s get started with your 30 day free trial.
          </p>
          {/* Form for Signup */}
          <div className="py-14">
            <SignupForm />
          </div>
          <button
            className="w-1/2 p-2 
                bg-black 
                text-white 
                dark:bg-white 
                dark:text-black 
                hover:bg-custom-purple 
                dark:hover:bg-custom-purple 
                hover:ease-in 
                hover:duration-100"
          >
            Sign up
          </button>
          <div className="mt-4">
            <button className="hover:text-custom-purple hover:border-none border-none dark:text-white dark:hover:text-custom-purple">
              Already got an account? Click here to login.
            </button>
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
    </>
  );
};

export default Signup;
