import testOne from "../assets/imgs/dkhoon.png";
import testThree from "../assets/imgs/neyam.png";
import testTwo from "../assets/imgs/sayyar.png";
function Testmonial() {
  return (
    <section className="container mx-auto my-[8em] px-4  sm:px-6 lg:px-8">
      <h2 className="font-semibold text-4xl  text-center text-txtGray">
        What our customers says about us
      </h2>
      <div className="testmoninal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[4em] ">
        <div className="testmonial-card flex flex-col items-center group  ">
          <div className="testmonial-card-content w-[40ch] px-6 h-[20vh] flex justify-center items-center text-center text-xl/7 text-white bg-primary rounded-lg shadow-lg">
            <p>
              The best app for Zed and e-commerce platforms, offering 24/7
              service and robust technical support.
            </p>
          </div>
          <div className="testmonial-card-image w-[70%] p-4 rounded-lg shadow-lg group-hover:pt-7 duration-300 ease-out transition-all">
            <img
              src={testOne}
              alt="Dkhoon ALEmiratia"
              loading="lazy"
              title="Dkhoon ALEmiratia"
              className="w-1/2 h-[80px] object-contain mx-auto"
            />
          </div>
        </div>
        <div className="testmonial-card flex flex-col items-center group  ">
          <div className="testmonial-card-content w-[40ch] px-6 h-[20vh] flex justify-center items-center text-center text-xl/7 text-white bg-primary rounded-lg shadow-lg">
            <p>
              A great app for return services, with a responsive team that
              boosts customer trust.
            </p>
          </div>
          <div className="testmonial-card-image w-[70%] p-4 rounded-lg shadow-lg group-hover:pt-7 duration-300 ease-out transition-all">
            <img
              src={testTwo}
              alt="SaYYar"
              loading="lazy"
              title="SaYYar"
              className="w-1/2 h-[80px] object-contain mx-auto"
            />
          </div>
        </div>
        <div className="testmonial-card flex flex-col items-center group  ">
          <div className="testmonial-card-content w-[40ch] px-6 h-[20vh] flex justify-center items-center text-center text-xl/7 text-white bg-primary rounded-lg shadow-lg">
            <p>
              An excellent app that saves time, builds customer trust, and is
              highly valuable for marketing.
            </p>
          </div>
          <div className="testmonial-card-image w-[70%] p-4 rounded-lg shadow-lg group-hover:pt-7 duration-300 ease-out transition-all">
            <img
              src={testThree}
              alt="Neyam"
              loading="lazy"
              title="Neyam"
              className="w-1/2 h-[80px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testmonial;
