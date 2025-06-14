import imgbrand from "../assets/imgs/download (1).svg";
import Email from "../assets/imgs/download (13).svg";
import youtube from "../assets/imgs/download (14).svg";
import linkedin from "../assets/imgs/download (15).svg";
import twitter from "../assets/imgs/download (16).svg";
import instagram from "../assets/imgs/download (17).svg";
import logoFooter from "../assets/imgs/logo.svg";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-secondary bg-bgFooter rounded-xl shadow-sm mx-4 my-10 py-6">
      <div className="container px-6">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-6 py-3 text-center text-secondary">
          <a
            href="#"
            className="flex items-center gap-1 text-2xl font-semibold text-primary"
            title="yamm"
          >
            <img
              src={logoFooter}
              alt="Logo Footer Image"
              title="logo Footer image"
              loading="lazy"
              className="p-1 w-10 h-10"
            />
            <span>yamm</span>
          </a>

          <ul className="flex flex-col md:flex-row  gap-6 ">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Return request</a>
            </li>
          </ul>
        </div>
        <hr />

        <div className="py-5 flex items-center justify-center md:justify-between gap-8">
          <img
            src={imgbrand}
            alt="Brand Image"
            title="Brand Image"
            loading="lazy"
          />
          <p>
            All Rights Reserved © {currentYear}{" "}
            <a
              href="https://www.linkedin.com/in/ahmed-abdel-basset/"
              className="text-primary font-semibold hover:text-[#ac9fc7] duration-300 trainsition-all "
              rel="noopener noreferrer"
              target="_blank"
            >
              Ahmed A Basset
            </a>
          </p>
          <ul className="text-secondary flex items-center  gap-4">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  title="instagram"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  title="twitter"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  title="youtube"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  title="youtube"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:ahmedabasset936@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Email} alt="Email" title="Email" loading="lazy" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
