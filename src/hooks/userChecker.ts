import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

const useUserChecker = () => {
  const router = useRouter();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    console.log("Checking if user is logged in ...");
  }
  if (user) {
    console.log("Your already logged in");
    router.push("/");
  }
};

export default useUserChecker;