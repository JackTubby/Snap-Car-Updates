import SignupForm from "../components/auth-forms/SignupForm";

const Signup = () => {
  return (
    <>
      <h2>Create an Account</h2>
      <p>Let's get started with your 30 day free trial.</p>
      {/* Form for Signup */}
        <SignupForm />
      <a>Click here to login.</a>
    </>
  );
};

export default Signup;
