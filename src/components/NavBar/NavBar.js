import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import cardio from "../../assets/icons/cardio.png";
import workout from "../../assets/icons/workout.png";

function NavBar() {
  return (
    <section className="navbarcontainer">
      <div className="navbar">
        <NavLink to="/cardio" className="navbar__link">
          <img src={cardio} alt="cardio" className="navbar__img" />{" "}
          <p className="navbar__text">Cardio</p>
        </NavLink>
        <NavLink to="/workout" className="navbar__link">
          <p className="navbar__text">Workout</p>
          <img src={workout} alt="workout" className="navbar__img" />{" "}
        </NavLink>
      </div>
    </section>
  );
}

export default NavBar;
