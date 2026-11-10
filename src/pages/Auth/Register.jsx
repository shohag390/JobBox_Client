import { Link, useNavigate } from "react-router";
import logo from "../../assets/images/top_logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegester = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          return updateUserProfile(name);
        }
      })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Account Created!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email already exists",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.log(error);

          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something Wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section className="h-screen w-full px-5 md:px-12 lg:px-37 2xl:px-50 bg-[#ffffff] flex items-center justify-center">
      <div className="h-[70vh] md:h-[68vh] lg:h-[71vh] 2xl:h-[73vh] w-full md:w-[60%] lg:w-[46%] 2xl:w-[40%] bg-[#f3f3f3] flex justify-center rounded-xl relative border border-[#e2e2e2]">
        <div className="w-[90%] absolute bg-[#05264e] -top-6 md:-top-7 lg:-top-8 rounded-xl p-4 md:p-5 lg:p-6 flex justify-center">
          <div className="flex flex-col items-center justify-center text-[#ffffff]">
            <img
              className="h-16 md:h-17 lg:h-18 2xl:h-20"
              src={logo}
              alt="logo"
            />
            <h4 className="text-[20px] 2xl:text-[22px] font-medium lg:font-semibold 2xl:font-bold pb-1 md:pb-1.5 lg:pb-2">
              Job Box
            </h4>
            <h4 className="text-[17px] lg:text-[18px] font-medium">
              Create Your Account
            </h4>
            <p className="pb-4 md:pb-3 lg:pb-4 text-[14px] md:text-[16px] text-[#969696] text-center">
              Join Job Box and take the next step toward your dream career.
            </p>

            <Link
              className="flex items-center gap-1 group hover:text-[#3c65f5] duration-500"
              to={"/"}
            >
              <span>Go To Home</span>
              <IoIosArrowRoundForward className=" group-hover:translate-x-1 duration-500" />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleRegester}
          className="absolute px-5 md:px-6 lg:px-7 w-full top-[30vh] flex flex-col gap-4 lg:gap-5"
        >
          <input
            className="w-full bg-[#ffffff] py-2.5 lg:py-3 2xl:py-3.5 px-4 border border-[#e2e2e2] outline-none rounded-md"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full bg-[#ffffff] py-2.5 lg:py-3 2xl:py-3.5 px-4 border border-[#e2e2e2] outline-none rounded-md"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full bg-[#ffffff] py-2.5 lg:py-3 2xl:py-3.5 px-4 border border-[#e2e2e2] outline-none rounded-md"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[14px] md:text-[16px] text-[#4f5e64]">
                Remember Me!
              </p>
            </div>
          </div>
          <button
            className="bg-[#3c65f5] hover:bg-[#05264e] py-2 lg:py-2.5 2xl:py-3 text-[#ffffff] rounded-lg duration-500 active:scale-110"
            type="submit"
          >
            Register
          </button>
          <p className="text-center text-[14px] md:text-[16px] text-[#4f5e64]">
            You have ad Account?{" "}
            <Link
              className="hover:text-[#3c65f5] duration-500 hover:underline"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
