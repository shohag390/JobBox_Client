import { useEffect, useState } from "react";
import logo from "../assets/images/jobhub-logo.svg";
import { Link, NavLink } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";

const navItme = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/about-us",
    pathName: "About Us",
  },
  {
    path: "/find-a-job",
    pathName: "Find A Job",
  },
  {
    path: "/blog",
    pathName: "Blog",
  },
  {
    path: "/contact-us",
    pathName: "Contact Us",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] w-full px-5 md:px-12 lg:px-37 2xl:px-50 flex items-center justify-between sticky top-0 left-0 bg-[#ffffff] duration-500 z-50 ${scrolled ? "border-b border-[#eeeeee]" : "border-b border-transparent"}`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          className="h-8 md:h-9 lg:h-10 2xl:h-11"
          src={logo}
          alt="logoImage"
        />
      </Link>

      {/* desktop manu */}
      <ul className="hidden lg:flex lg:items-center lg:gap-6 2xl:gap-7">
        {navItme?.map((item, index) => (
          <li key={index}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#3c65f5]" : "text-[#05264e]"
              }
              to={item?.path}
            >
              {item?.pathName}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* mobile manu */}
      <ul
        className={`flex flex-col justify-center items-center gap-6 md:gap-7 lg:hidden absolute h-[92vh] md:h-[91vh] w-full top-[8vh] md:top-[9vh] duration-500 bg-[#ffffff] ${!open ? "right-full" : "right-0"}`}
      >
        {navItme?.map((item, index) => (
          <li key={index}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#3c65f5]" : "text-[#05264e]"
              }
              to={item?.path}
            >
              {item?.pathName}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 md:gap-5">
        {/* right site button */}
        {!user ? (
          <Link to={""}>
            <button className="bg-[#3c65f5] hover:bg-[#05264e] py-2 lg:py-2.5 2xl:py-3 px-6 md:px-7 lg:px-8 2xl:px-10 text-[#ffffff] rounded-lg duration-500 active:scale-110">
              Sign in
            </button>
          </Link>
        ) : (
          <Link to={""}>
            <button className="bg-[#3c65f5] hover:bg-[#05264e] py-2 lg:py-2.5 2xl:py-3 px-6 md:px-7 lg:px-8 2xl:px-10 text-[#ffffff] rounded-lg duration-500 active:scale-110">
              Dashboard
            </button>
          </Link>
        )}

        {/* Manu bar */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? (
            <IoMenu className="text-[28px] md:text-[32px]" />
          ) : (
            <IoClose className="text-[28px] md:text-[32px]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
