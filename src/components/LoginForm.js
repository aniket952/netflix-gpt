import React, { useRef, useState } from "react";
import checkValidation from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function LoginForm() {
  const [isSignIN, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handelSignUp = () => {
    setIsSignIn(!isSignIN);
  };
  const handleSubmit = () => {
    const validationResult = checkValidation(
      email.current.value,
      password.current.value
    );
    console.log(validationResult);
    setErrorMessage(validationResult);
    if (validationResult) return;

    if (!isSignIN) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("signup me hu tu", user);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://avatars.githubusercontent.com/u/91933408?s=400&u=6f184884d955dc8cdbafe554a065291b77ccb913&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log("name --", displayName, photoURL);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log("err ", error.message);
            });

          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      console.log("in else");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = auth.currentUser;
          console.log("sign in-- ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className=" bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-80 w-2/6">
      <form className="text-white m-8 p-8" onSubmit={(e) => e.preventDefault()}>
        <h1 className=" font-bold text-4xl py-4">
          {isSignIN ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIN && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-4 my-2 w-full bg-slate-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-slate-800 rounded-lg"
        />
        <br></br>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-slate-800 rounded-lg"
        />
        <br></br>
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
          onClick={handleSubmit}
        >
          {isSignIN ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handelSignUp}>
          {isSignIN ? "New to Netflix?Sign up now." : "sign in now"}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
