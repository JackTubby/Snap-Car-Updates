import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const signout = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <h1 className="text-blue-500">Sign Out</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default signout;
