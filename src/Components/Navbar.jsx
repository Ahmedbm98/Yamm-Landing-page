import { useEffect, useState } from "react";
import logo from "../assets/imgs/logo.svg";
function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <nav
      className={`${
        scroll
          ? "w-[57%] shadow-lg backdrop-blur-sm"
          : "w-[70%] border bg-white"
      } flex justify-center sm:justify-between items-center flex-wrap gap-3 py-3 px-7 rounded-xl  mx-auto fixed top-10 right-0 left-0  z-10  transition-all duration-500 ease-linear`}
    >
      <a
        className="flex items-center gap-2 text-primary font-semibold text-[clamp(.725rem,1.3rem,3.75rem)] "
        href="#"
      >
        <img
          src={logo}
          alt="logo image"
          loading="lazy"
          className="w-full h-full block object-cover"
        />
        yamm
      </a>
      <button
        className="text-white bg-primary py-2 px-4 font-medium rounded-lg shadow-md"
        type="button"
      >
        Join us now
      </button>
    </nav>
  );
}

export default Navbar;
