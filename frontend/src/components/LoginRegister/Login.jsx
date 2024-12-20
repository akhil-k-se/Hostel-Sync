import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faHomeLgAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    enrollmentID: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const response = await axios.post(
        "https://campus-mate.onrender.com/student/login",
        loginData,
        { withCredentials: true }
      );
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Wait for toast to be shown before navigating
      setTimeout(() => {
        navigate("/student");
      }, 1000);
    } catch (err) {
      console.error("Error during login:", err);
      const errorMsg = err.response?.data?.msg || "An error occurred during login.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#DFC9AC]">
      <ToastContainer />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-[85%] w-[70%] bg-white items-center px-10 rounded-xl">
        <Link onClick={()=>{
          navigate('/')
          window.location.reload();
        }} className="absolute top-2 right-2" to="/">
          <button className="absolute z-20 md:px-7 md:py-3 px-5 py-2 text-black text-4xl rounded-lg top-2 right-2">
            <FontAwesomeIcon icon={faHomeLgAlt}/>
          </button>
        </Link>
        <div
          className="w-[90%] h-[90%] hidden md:block rounded-xl"
          style={{
            backgroundImage: "url('/login.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="relative overflow-hidden w-[90%] h-[90%] flex flex-col items-center rounded-xl gap-5">
          <h1 className="text-3xl font-bold mt-10 ">Login</h1>
          <div className="flex flex-col w-[80%] gap-5">
            <label className=" text-lg font-semibold">EnrollmentID</label>
            <input
              type="number"
              className=" bg-white focus:outline-none border-2 focus:border-[#a48152] h-12 rounded-lg px-5"
              placeholder="EnrollmentID"
              name="enrollmentID"
              value={loginData.enrollmentID}
              onChange={handleLoginChange}
            />
            <label className=" text-lg font-semibold">Password</label>
            <div className="relative w-full  h-12 rounded-lg">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className=" bg-white focus:outline-none border-2 focus:border-[#a48152] h-12 rounded-lg px-5 w-full"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            <button
              className="mt-4 bg-[#383433] text-white h-12 rounded-lg hover:bg-white hover:text-[#a48152] border-2 hover:outline-none hover:border-[#a48152] transition-all duration-100 "
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
          <p className="font-semibold ">
            Don't have an account ?{" "}
            <Link to="/student-signup" className="text-[#a48152] font-semibold">
              SignUp !
            </Link>
          </p>
          <img
            className="w-full"
            src="https://res.cloudinary.com/dhwaifalx/image/upload/v1732710122/logo-campusMate_m90scm.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;