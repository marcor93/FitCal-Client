import "./Footer.scss";
import liicon from "../../assets/icons/linkedin.png";
import ghicon from "../../assets/icons/git.png";
import emicon from "../../assets/icons/email.svg";

function Footer() {
  return (
    <section className="footercontainer">
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/marcorizzo93/"
          className="footer__link"
        >
          <img src={liicon} alt="linkedin" className="footer__img" />
        </a>
        <a href="mailto:mrizzo93@gmail.com" className="footer__link">
          <img src={emicon} alt="linkedin" className="footer__img" />
        </a>
        <a href="https://github.com/marcor93" className="footer__link">
          <img src={ghicon} alt="linkedin" className="footer__img" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
