import SignupForm from "./auth-forms/SignupForm";

const Signup = () => {
  return (
    <>
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
                hover:ease-in 
                hover:duration-100"
      >
        Sign up
      </button>
      <div className="mt-4">
        <button className="hover:text-custom-purple hover:border-none border-none">Already got an account? Click here to login.</button>
      </div>
    </>
  );
};

export default Signup;
