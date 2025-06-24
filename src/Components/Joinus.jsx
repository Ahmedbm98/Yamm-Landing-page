function Joinus() {
  return (
    <section className="bg-[#9c6bff] text-[#f1e6ff] py-10 rounded-lg w-[98%] mx-auto my-10">
      <div className="flex flex-col justify-center items-center gap-6 px-6">
        <p className="text-[clamp(1.60rem,2.5vw,5rem)] font-semibold text-center">
          Join us to simplify your return and refund process
        </p>
        <button
          type="button"
          className="text-[clamp(1rem,1.5vw,1rem)] bg-[#f1e6ff] capitalize rounded-full px-4 md:px-7 py-3 md:py-5 text-secondary text-sm font-semibold hover:bg-[#d8c6ff] transition-all duration-300"
        >
          Reach out to us
        </button>
      </div>
    </section>
  );
}

export default Joinus;
