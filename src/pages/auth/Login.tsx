import LoginForm from "./auth-forms/LoginForm";

const Login = () => {
  return (
    <div>
      <h2 className="pb-3 text-3xl">Welcome Back</h2>
      <p className="pb-8 text-sm">Please login to access your account.</p>
      {/* Login Form */}
      <div className="py-14">
        <LoginForm />
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
        Log In
      </button>
      <button className="hover:text-custom-purple hover:border-none border-none">Haven&apos;t got an account? Create one here.</button>
    </div>
  );
};

export default Login;
