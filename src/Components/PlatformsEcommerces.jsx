import magento from "../assets/imgs/magento-Cgf7cxio.png";
import opencart from "../assets/imgs/open-cart-Tb3hChMt.png";
import salesforce from "../assets/imgs/salesforce-BFNvU_SP.png";
import salla from "../assets/imgs/salla-B60BJRuy.png";
import shopify from "../assets/imgs/shopify-DVrReibK.png";
import zid from "../assets/imgs/zid-DqjAcs5_.png";
import CardPlatform from "./CardPlatform";
function PlatformsEcommerces() {
  const listOfPlatforms = [
    { srcImg: shopify, altImg: "Shopify", color: "bg-[#90B843]" },
    { srcImg: salesforce, altImg: "salesforce", color: "bg-[#2FBEEC]" },
    { srcImg: magento, altImg: "magento", color: "bg-[#E85726]" },
    { srcImg: opencart, altImg: "opencart", color: "bg-[#019CD8]" },
    { srcImg: salla, altImg: "salla", color: "bg-[#004754]" },
    { srcImg: zid, altImg: "zid", color: "bg-[#7462F4]" },
  ];
  return (
    <section className="container w-[80%] my-[8em]">
      <h2 className="text-center text-txtGray text-[clamp(1.6rem,2.8vw,4rem)] font-semibold my-14">
        Easy integration with major e-commerce platforms
      </h2>
      <CardPlatform platform={listOfPlatforms} />
    </section>
  );
}

export default PlatformsEcommerces;
