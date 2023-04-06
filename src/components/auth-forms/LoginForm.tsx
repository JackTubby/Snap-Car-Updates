import { useState, useEffect } from 'react';
import {  getAuth, signInWithEmailAndPassword   } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import useUserChecker from '@/hooks/userChecker';

const LoginForm = () => {
  // Check if a user is logged in
  useUserChecker();

  const router = useRouter();
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = (e:any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }
  return (
    <form className="flex justify-center">
      <div className="w-1/2">
        <div className="p-4 mt-4">
          <input
            type="email"
            id='email-address'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
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
            id='password'
            name='password'
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
        onClick={onLogin}
            className="w-1/2 p-2 
                bg-black 
                text-white 
                dark:bg-white 
                dark:text-black 
                hover:bg-custom-purple
                dark:hover:bg-custom-purple 
                hover:ease-in 
                hover:duration-100"
          >
            Log In
          </button>
      </div>
    </form>
  );
};

export default LoginForm;