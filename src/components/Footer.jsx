import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-3 mt-auto">
      <style jsx>{`
        .footer {
          text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%; /* Fallback for older browsers */
          -moz-text-size-adjust: 100%; /* Fallback for Firefox */
        }
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <div className="footer-container flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 gap-2 md:gap-0">
        <div className="terms">
          <p className="text-xs text-center md:text-left">Terms & Conditions</p>
        </div>
        <div className="socials flex gap-3">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon transition-transform hover:scale-110"
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
        <div className="copyright">
          <p className="text-xs text-center md:text-right">
            © {new Date().getFullYear()} Saksham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;