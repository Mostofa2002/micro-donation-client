import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://micro-server-side.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { LogOut } = useAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("err from intercept", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          LogOut()
            .then(() => {
              Navigate("/login");
            })
            .catch((err) => console.log("error", err));
        }
      }
    );
  }, [LogOut, Navigate]);
  return instance;
};

export default useAxiosSecure;
