import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import React, { useState, useEffect } from "react";
import Firebase from "../firebase/firebaseApp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseApp";


const formatAuthUser = (user:any) => ({
  uid: user.uid,
  email: user.email
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState();

  // console.log(auth)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log("uid", uid);
      } else {
        // User is signed out
        // console.log("user is logged out");
      }
    });
  }, []);
  return (
    // Attribute class tells Tailwind to use the dark theme class
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
