const LoginForm = () => {
  return (
    <form className="flex justify-center">
      <div className="w-1/2">
        <div className="p-4 mt-4">
          <input
            type="text"
            placeholder="Email"
            className="border-b-2 
            w-full 
            outline-none 
            focus:border-custom-purple 
            focus:ease-in 
            focus:duration-200
            dark:bg-inherit"
          />
        </div>
        <div className="p-4 mt-4">
          <input
            type="text"
            placeholder="Password"
            className="border-b-2 
            w-full 
            outline-none 
            focus:border-custom-purple 
            focus:ease-in 
            focus:duration-200
            dark:bg-inherit"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
