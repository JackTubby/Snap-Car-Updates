import SignupForm from "../../components/auth-forms/SignupForm";

const Signup = () => {
  return (
    <>
      <h2 className="pb-3 text-3xl">Create an Account</h2>
      <p className="pb-8 text-sm">
        Let's get started with your 30 day free trial.
      </p>
      {/* Form for Signup */}
      <div className="py-14">
        <SignupForm />
      </div>
      <a>Click here to login</a>
    </>
  );
};

export default Signup;
