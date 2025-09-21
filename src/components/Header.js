import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handelLogout = () => {
    signOut(auth)
      .then(() => {
      
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/") 
      }
    });
    //unsubscribe when component unmounts
    return ()=> unsubscribe()
  }, []);
  return (
    <div className="absolute z-50 w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-40"
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <button className="rounded-lg p-4 text-white" onClick={handelLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
