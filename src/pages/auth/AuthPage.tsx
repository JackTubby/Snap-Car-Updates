import Login from "./Login";
import Signup from "./Signup";

import Image from "next/image";
import garageImg from "../../../public/assets/img/garage.jpg";

const AuthPage = () => {
  const loginOrSignup = false;

  return (
    <div className="flex w-full text-center">
      <div className="w-6/12 h-screen relative pt-64">
        {loginOrSignup ? <Login /> : <Signup />}
      </div>
      <div className="flex w-6/12 h-screen">
        <div className="w-5/6 h-5/6 m-auto">
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

export default AuthPage;
