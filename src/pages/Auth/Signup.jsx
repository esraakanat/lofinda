import React, { useState } from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import { purpleBtnClass } from "../../utils/classes";
import Container from "../../ui/Container";
import { useNavigate } from "react-router-dom";
import { FaClipboard, FaEnvelope, FaUser } from "react-icons/fa";
import apiRequest from "../../utils/api-request";
import { BarLoader } from "react-spinners";
import { FaShield } from "react-icons/fa6";
import swalNotify from "../../utils/swal";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navi = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        firstname,
        lastname,
        username,
        email,
        password,
      };
      const response = await apiRequest("/api/auth/signup", "POST", data);
      console.log(response);
    } catch (error) {
      console.log(error);
      swalNotify("error", "Error!", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header black={true} />
      <div className="wrap">
        <Container>
          <div className="py-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="img-wrap rounded-3xl overflow-clip hidden lg:block">
              <img
                src="/asset/auth-img.png"
                alt="Signup"
                className="h-[80vh]"
              />
            </div>
            <div className="form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="header text-2xl font-bold text-center">
                  <h1>
                    Sign Up to <span className="text-primary">Lofinda.ng</span>
                  </h1>
                  <div className="lg:flex items-center gap-8 mt-10">
                    <button
                      className={`${purpleBtnClass} shadow-none w-full flex justify-center gap-4 items-center text-sm mb-4 lg:mb-auto`}
                    >
                      <img src="/asset/google.png" alt="Google" /> Sign up with
                      Google
                    </button>
                    <button
                      className={`${purpleBtnClass} shadow-none w-full flex justify-center gap-4 items-center text-sm`}
                    >
                      <img src="/asset/apple.png" alt="Apple" /> Sign up with
                      Apple
                    </button>
                  </div>
                </div>

                <div className="wrap text-center text-black font-bold relative bg-red-100 my-10 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <hr className="w-full border-t border-black absolute" />
                    <span className="bg-white px-2 z-10">or</span>
                  </div>
                </div>

                <div className="rounded-3xl text-sm bg-primary bg-opacity-10 p-10 mx-auto flex flex-col gap-5 ">
                  <div className="flex gap-5 w-full">
                    <div className="input-wrap w-full">
                      <label> Firstname</label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                          <FaClipboard className="text-primary" />
                        </div>
                        <input
                          type="text"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none "
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="input-wrap w-full">
                      <label> Lastname</label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                          <FaClipboard className="text-primary" />
                        </div>
                        <input
                          type="text"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label> Username</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <FaUser className="text-primary" />
                      </div>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                        placeholder="Username"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-wrap">
                    <label> Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                        placeholder="abc@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-wrap">
                    <label> Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <FaShield className="text-primary" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                        placeholder="********"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-wrap flex items-center gap-2">
                    <input type="checkbox" required />{" "}
                    <label>
                      By signing up you agree to our{" "}
                      <a href="/privacy-policies" className="text-blue-500">
                        privacy policy
                      </a>
                    </label>
                  </div>

                  <div className="btn-wrap mt-5">
                    <button
                      className={`${purpleBtnClass} shadow-none w-full text-sm mb-2`}
                    >
                      {loading ? <BarLoader color="#36d7b7" /> : "Signup"}
                    </button>
                    <p className="text-black text-center">
                      {" "}
                      Already have an account?{" "}
                      <span
                        className="text-primary font-bold cursor-pointer"
                        onClick={() => navi("/auth/login")}
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
