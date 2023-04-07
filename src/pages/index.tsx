// NEXT.JS IMPORTS
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// REACT & FIREBASE IMPORTS
import React, { useState, useEffect } from "react";
import { initFirebase } from "@/firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth";
// COMPONENT IMPORTS
import Navbar from "@/components/Navbar";
import ModeToggler from "@/components/ModeToggler";
import Sidebar from "@/components/sidebars/Sidebar";

export default function Home() {

  initFirebase();
  const auth = getAuth();
  const [ user, loading ] = useAuthState(auth);
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (user) {
    return <div>Welcome {user.email}</div>;
  }

  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* {user ? <h1>TRUE</h1> : FALSE} */}
        <ModeToggler />
      </main>
    </>
  );
}
