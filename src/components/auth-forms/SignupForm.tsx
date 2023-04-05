import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useState } from "react";

const SignupForm = () => {

    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = async (e:any) => {
      e.preventDefault();
  
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  

  return (
    <>
      <form className="flex justify-center">
        <div className="w-1/2">
          {/* <div className="p-4 mt-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 
              w-full 
              outline-none 
              focus:border-custom-purple 
              focus:ease-in 
              focus:duration-200
              dark:bg-inherit"
            />
          </div> */}
          <div className="p-4 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
          <button
            type="submit"
            onClick={onSubmit}
            className="w-4/5 p-2 
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
        </div>
      </form>
    </>
  );
};

export default SignupForm;
