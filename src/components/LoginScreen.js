import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constant";

const LoginScreen = () => {
  return (
    <div className="">
      <Header />
      <LoginForm />
      <div className="bg-gradient-to-b from-black">
        <img
          src={BG_URL}
          alt="bg-screen"
        />
      </div>
     
    </div>
  );
};

export default LoginScreen;
