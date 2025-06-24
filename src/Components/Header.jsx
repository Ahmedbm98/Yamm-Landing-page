import logoimg from "../assets/imgs/logo.svg";
function Header() {
  return (
    <header className="bg-gradient-to-b from-white/100 to-primary/15">
      <div className="container h-[100dvh] flex flex-col justify-center items-center gap-10">
        <h2 className="px-4 py-2 rounded-2xl font-semibold  text-white flex gap-3 text-[clamp(1.2rem,2.7vw,1rem)] bg-gradient-to-b from-primary/40 to-primary ">
          <img src={logoimg} alt="" loading="lazy" /> Welcome to Yamm
        </h2>
        <h1 className="text-[clamp(1.5rem,3.2vw,6rem)] w-[80%] md:w-[60%] text-center font-bold text-[#27364d]">
          Yamm offers <span className="text-primary">End to end solution</span>{" "}
          For your returns
        </h1>
        <p className="text-[clamp(1.11rem,1.2vw,5rem)] w-[60%] md:w-[40%] text-center text-txtGray">
          Experience the simplicity and speed of our automated system that
          delights customers and retailers.
        </p>
        <hgroup className="flex flex-wrap items-end justify-center sm:justify-between gap-4">
          <button
            type="button"
            className="rounded-xl shadow-lg outline-none border border-primary px-6 py-2 text-primary font-semibold hover:text-primary/60 duration-300 transition-all ease-linear"
          >
            Request a demo
          </button>
          <button
            type="button"
            className="rounded-xl shadow-lg outline-none  px-6 py-2 bg-primary text-white font-semibold hover:text-black  hover:bg-primary/60 duration-300 transition-all ease-linear"
          >
            Join us now
          </button>
        </hgroup>
      </div>
    </header>
  );
}

export default Header;
