import "./Workout.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function Workout() {
  const navigate = useNavigate();
  const API = "http://localhost:8080/activity";

  const [activitydate, handleDateChange] = useState(new Date());
  const [tod, setTod] = useState("");
  const [rating, setRating] = useState("");
  const [exercise1, setExercise1] = useState("");
  const [exercise2, setExercise2] = useState("");
  const [exercise3, setExercise3] = useState("");
  const [exercise4, setExercise4] = useState("");
  const [exercise5, setExercise5] = useState("");
  const [addExer, moreExer] = useState(1);

  const handleTodChange = (e) => {
    setTod(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleExercise1Change = (e) => {
    setExercise1(e.target.value);
  };
  const handleExercise2Change = (e) => {
    setExercise2(e.target.value);
  };
  const handleExercise3Change = (e) => {
    setExercise3(e.target.value);
  };
  const handleExercise4Change = (e) => {
    setExercise4(e.target.value);
  };
  const handleExercise5Change = (e) => {
    setExercise5(e.target.value);
  };

  const postActivity = async (e) => {
    try {
      await axios.post(API, {
        date: Math.round(activitydate.getTime() / 1000),
        timeofday: tod,
        rating: rating,
        exercise1: exercise1,
        exercise2: exercise2,
        type: "Workout",
      });
    } catch {
      console.log("API Post Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tod) {
      alert("Please add a time of day");
      return;
    }
    if (!rating) {
      alert("Please rate your workout");
      return;
    }
    if (!exercise1) {
      alert("Please add at least one exercise");
      return;
    } else {
      postActivity();
      alert("Thank you for uploading a new activity");
      navigate("/activity");
    }
  };

  const addClick = (e) => {
    if (addExer === 5) {
      alert("You can only add upto 5 exercises at this time");
      return;
    }
    moreExer((prevCount) => prevCount + 1);
  };

  // request.get({
  //   url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  //   headers: {
  //     'X-Api-Key': 'EDPnK0XCT5v/q/eS+gkchg==0nDqaK71uaG7NFVJ'
  //   },
  // https://api-ninjas.com/api/exercises

  return (
    <section className="workoutcontainer">
      <h1 className="workoutheader">New Workout Activity</h1>
      <form action="" className="workoutform" onSubmit={handleSubmit}>
        <div className="workoutform__field">
          <Calendar onChange={handleDateChange} value={activitydate} />
        </div>
        <div className="workoutform__right">
          <div className="workoutform__field">
            <p className="workoutform__title">Time of Day:</p>
            <select
              id="tod"
              name="TimeOfDay"
              className="workoutform__input"
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
          <div className="workoutform__field">
            <p className="workoutform__title">Rating:</p>
            <select
              id="rating"
              name="rating"
              className="workoutform__input"
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

          <div className="workoutform__field">
            <p className="workoutform__title">Exercise:</p>
            <select
              id="exercise1"
              name="exercise1"
              className="workoutform__input"
              value={exercise1}
              onChange={handleExercise1Change}
            >
              <option value="">...</option>
              <option value="Abs">Abs</option>
              <option value="Biceps">Biceps</option>
              <option value="Calves">Calves</option>
              <option value="Chest">Chest</option>
              <option value="Forearms">Forearms</option>
              <option value="Glutes">Glutes</option>
              <option value="Lower Back">Lower Back</option>
              <option value="Middle Back">Middle Back</option>
              <option value="Quadriceps">Quadriceps</option>
              <option value="Triceps">Triceps</option>
            </select>
          </div>
          {addExer > 1 && (
            <div className="workoutform__field">
              <p className="workoutform__title">Exercise:</p>
              <select
                id="exercise2"
                name="exercise2"
                className="workoutform__input"
                value={exercise2}
                onChange={handleExercise2Change}
              >
                <option value="">...</option>
                <option value="Abs">Abs</option>
                <option value="Biceps">Biceps</option>
                <option value="Calves">Calves</option>
                <option value="Chest">Chest</option>
                <option value="Forearms">Forearms</option>
                <option value="Glutes">Glutes</option>
                <option value="Lower Back">Lower Back</option>
                <option value="Middle Back">Middle Back</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Triceps">Triceps</option>
              </select>
            </div>
          )}
          {addExer > 2 && (
            <div className="workoutform__field">
              <p className="workoutform__title">Exercise:</p>
              <select
                id="exercise3"
                name="exercise3"
                className="workoutform__input"
                value={exercise3}
                onChange={handleExercise3Change}
              >
                <option value="">...</option>
                <option value="Abs">Abs</option>
                <option value="Biceps">Biceps</option>
                <option value="Calves">Calves</option>
                <option value="Chest">Chest</option>
                <option value="Forearms">Forearms</option>
                <option value="Glutes">Glutes</option>
                <option value="Lower Back">Lower Back</option>
                <option value="Middle Back">Middle Back</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Triceps">Triceps</option>
              </select>
            </div>
          )}
          {addExer > 3 && (
            <div className="workoutform__field">
              <p className="workoutform__title">Exercise:</p>
              <select
                id="exercise4"
                name="exercise4"
                className="workoutform__input"
                value={exercise4}
                onChange={handleExercise4Change}
              >
                <option value="">...</option>
                <option value="Abs">Abs</option>
                <option value="Biceps">Biceps</option>
                <option value="Calves">Calves</option>
                <option value="Chest">Chest</option>
                <option value="Forearms">Forearms</option>
                <option value="Glutes">Glutes</option>
                <option value="Lower Back">Lower Back</option>
                <option value="Middle Back">Middle Back</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Triceps">Triceps</option>
              </select>
            </div>
          )}
          {addExer > 4 && (
            <div className="workoutform__field">
              <p className="workoutform__title">Exercise:</p>
              <select
                id="exercise5"
                name="exercise5"
                className="workoutform__input"
                value={exercise5}
                onChange={handleExercise5Change}
              >
                <option value="">...</option>
                <option value="Abs">Abs</option>
                <option value="Biceps">Biceps</option>
                <option value="Calves">Calves</option>
                <option value="Chest">Chest</option>
                <option value="Forearms">Forearms</option>
                <option value="Glutes">Glutes</option>
                <option value="Lower Back">Lower Back</option>
                <option value="Middle Back">Middle Back</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Triceps">Triceps</option>
              </select>
            </div>
          )}

          {addExer < 5 ? (
            <div className="workoutform__button" onClick={addClick}>
              Add Another Exercise
            </div>
          ) : (
            <h3 className="workoutform__warning">Max Exercise Cap Reached</h3>
          )}

          <button className="workoutform__button">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Workout;
