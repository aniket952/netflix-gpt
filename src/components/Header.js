import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANG } from "../utils/constant";
import { addGptSearch, addLang } from "../utils/userClickSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const userClick = useSelector((store) => store.userClick);
  const handelLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handelGptSearch = () => {
    if (userClick.gptSearch) {
      dispatch(addGptSearch(false));
    } else {
      dispatch(addGptSearch(true));
    }
  };
  const handleLanguageChange = (e) => {
    dispatch(addLang(e.target.value));
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
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-50 w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div>
          {userClick.gptSearch && (
            <select
              className="rounded-lg bg-transparent m-4 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option
                  className="bg-slate-300"
                  key={lang.identifire}
                  value={lang.identifire}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="rounded-lg m-4 py-2 px-3 text-white hover:bg-red-700"
            onClick={handelGptSearch}
          >
            {userClick.gptSearch?"Home":"GPT Search"}
          </button>

          <button
            className="rounded-lg m-4 py-2 px-3 text-white hover:bg-red-700"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
