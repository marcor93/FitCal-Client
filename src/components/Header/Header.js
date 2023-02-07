import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <h1 className="header__title">FitCal</h1>
        <div className="header__right">
          <p className="header__right--date">
            {new Date(Date.now()).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="header__right--user">Hello PlaceHolder</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
