import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  const loginOrSignup = false;
  return (
    <div className="flex w-full text-center">
      <div className="w-6/12 h-screen relative pt-64">
        {loginOrSignup ? <Login /> : <Signup />}
      </div>
      <div className="w-6/12 h-screen bg-red-500">
      </div>
    </div>
  );
};

export default AuthPage;
