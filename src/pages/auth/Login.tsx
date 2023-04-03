import LoginForm from "../../components/auth-forms/LoginForm";

const Login = () => {
  return (
    <div>
      <h2>Welcome Back</h2>
      <p>Please login to access your account.</p>
      {/* Login Form */}
      <LoginForm />
      <a>Click here to signup</a>
    </div>
  );
};

export default Login;
