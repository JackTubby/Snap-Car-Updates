import LoginForm from "../../components/auth-forms/LoginForm";

const Login = () => {
  return (
    <div>
      <h2 className="pb-3 text-3xl">Welcome Back</h2>
      <p className="pb-8 text-sm">Please login to access your account.</p>
      {/* Login Form */}
      <div className="py-14">
        <LoginForm />
      </div>
      <a>Click here to signup</a>
    </div>
  );
};

export default Login;
