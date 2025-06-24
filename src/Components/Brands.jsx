import brandFour from "../assets/imgs/dkhoon.png";
import brandFive from "../assets/imgs/neyam.png";
import brandTwo from "../assets/imgs/rashof.svg";
import brandOne from "../assets/imgs/sayyar.png";
import brandThree from "../assets/imgs/toptato.png";

function Brands() {
  return (
    <section className="my-[8em] w-[75%] mx-auto">
      <h2 className="text-center text-txtGray text-[clamp(1.80rem,3.5vw,5rem)] font-semibold">
        Trusted by big stores
      </h2>
      <div className="container mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="brand-image p-3 flex justify-center items-center">
          <img src={brandOne} alt="SayyAr" title="Sayyar" loading="lazy" />
        </div>
        <div className="brand-image p-3 flex justify-center items-center">
          <img src={brandTwo} alt="Rashof" title="Rashof" loading="lazy" />
        </div>
        <div className="brand-image p-3 flex justify-center items-center">
          <img src={brandThree} alt="TOPTATO" title="TOPTATO" loading="lazy" />
        </div>
        <div className="brand-image p-3 flex justify-center items-center">
          <img
            src={brandFour}
            alt="Dkhoon AlEmiratia"
            title="Dkhoon AlEmiratia"
            loading="lazy"
          />
        </div>
        <div className="brand-image p-3 flex justify-center items-center">
          <img src={brandFive} alt="Neyam" title="Neyam" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
