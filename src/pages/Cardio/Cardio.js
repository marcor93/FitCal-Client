import "./Cardio.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function Cardio() {
  const navigate = useNavigate();
  const API = "http://localhost:8080/activity";

  const [activitydate, handleDateChange] = useState(new Date());
  const [tod, setTod] = useState("");
  const [distance, setDistance] = useState("");
  const [rating, setRating] = useState("");

  console.log(activitydate);

  const handleTodChange = (e) => {
    setTod(e.target.value);
  };
  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const postActivity = async (e) => {
    try {
      await axios.post(API, {
        date: Math.round(activitydate.getTime() / 1000),
        timeofday: tod,
        rating: rating,
        distance: distance,
        type: "Cardio",
      });
    } catch {
      console.log("API Post Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!distance) {
      alert("Please add a distance");
      return;
    }
    if (!tod) {
      alert("Please select a time of day");
      return;
    }
    if (!rating) {
      alert("Please pick a rating");
      return;
    } else {
      postActivity();
      alert("Thank you for uploading a new activity");
      navigate("/activity");
    }
  };

  return (
    <section className="cardiocontainer">
      <h1 className="cardioheader">New Cardio Activity</h1>
      <form action="" className="cardioform" onSubmit={handleSubmit}>
        <div className="cardioform__field">
          <Calendar onChange={handleDateChange} value={activitydate} />
        </div>
        <div className="cardioform__right">
          <div className="cardioform__field">
            <p className="cardioform__title">Time of Day:</p>
            <select
              id="tod"
              name="TimeOfDay"
              className="cardioform__input"
              value={tod}
              onChange={handleTodChange}
              placeholder="..."
            >
              <option value="">...</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
          <div className="cardioform__field">
            <p className="cardioform__title">Distance:</p>
            <input
              type="distance"
              placeholder="in KM"
              className="cardioform__input"
              onChange={handleDistanceChange}
            />
          </div>
          <div className="cardioform__field">
            <p className="cardioform__title">Rating:</p>
            <select
              id="rating"
              name="rating"
              className="cardioform__input"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="">...</option>
              <option value="Great">Great</option>
              <option value="Good">Good</option>
              <option value="Okay">Okay</option>
              <option value="Bad">Bad</option>
            </select>
          </div>
          <button className="cardioform__button">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Cardio;
