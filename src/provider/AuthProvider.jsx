import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const googleLogin = (value) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false);

      const loggedUser = { email: userEmail };
      if (currentUser) {
        axios
          .post("https://micro-server-side.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("token response", res.data));
      } else {
        axios
          .post("https://micro-server-side.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    createUser,
    LogOut,
    signIn,
    googleLogin,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
