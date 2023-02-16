import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [timeofday, setTimeOfDay] = useState("");
  const [loadtime, setLoadTime] = useState(true);
  const gohome = (e) => {
    navigate("/activity");
  };

  const timenow = new Date().getHours();

  if (loadtime) {
    if (timenow >= 5 && timenow <= 11) {
      setTimeOfDay("Morning ☕");
      setLoadTime(false);
    }
    if (timenow >= 12 && timenow <= 16) {
      setTimeOfDay("Afternoon ☀");
      setLoadTime(false);
    }
    if (timenow >= 17 && timenow <= 21) {
      setTimeOfDay("Evening 🌇");
      setLoadTime(false);
    }
    if (timenow >= 22) {
      setTimeOfDay("Night time 🌙");
      setLoadTime(false);
    }
    if (timenow <= 4) {
      setTimeOfDay("Night time 🌙");
      setLoadTime(false);
    }
  }

  return (
    <section className="header">
      <div className="header__container">
        <h1 className="header__title" onClick={gohome}>
          FitCal
        </h1>
        <div className="header__right">
          <p className="header__right--date">
            {new Date(Date.now()).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="header__right--user">{timeofday} </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
