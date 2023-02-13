import "./Details.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Details() {
  const { activityId } = useParams();
  const [isLoadingA, setLoadingA] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isupdated, setUpdate] = useState(false);
  const [oneActivity, setOne] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [showone, setShowOne] = useState(true);

  const [activitydate, handleDateChange] = useState(new Date());
  const [tod, setTod] = useState(oneActivity.timeofday);
  const [rating, setRating] = useState("");
  const [distance, setDistance] = useState("");
  const [exercise1, setExercise1] = useState("");
  const [exercise2, setExercise2] = useState("");
  const [exercise3, setExercise3] = useState("");
  const [exercise4, setExercise4] = useState("");
  const [exercise5, setExercise5] = useState("");
  const handleTodChange = (e) => {
    setTod(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
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

  const API = "http://localhost:8080/activity/" + activityId;

  useEffect(() => {
    const getOne = async () => {
      try {
        const { data } = await axios.get(API);
        setOne(data);
        setLoadingA(false);
        console.log("fetching data");
      } catch {
        console.log("error");
      }
    };
    getOne();
  }, []);

  // useEffect(() => {
  //   const getOne = async () => {
  //     try {
  //       const { data } = await axios.get(API);
  //       setOne(data);
  //       setLoadingA(false);
  //       console.log("fetching data");

  //     } catch {
  //       console.log("error");
  //     }
  //   };
  //   getOne();
  // }, [isupdated]);

  if (!isLoadingA && isLoading2) {
    setTod(oneActivity.timeofday);
    setRating(oneActivity.rating);
    setDistance(oneActivity.distance);
    setExercise1(oneActivity.exercise1);
    setExercise2(oneActivity.exercise2);
    setExercise3(oneActivity.exercise3);
    setExercise4(oneActivity.exercise4);
    setExercise5(oneActivity.exercise5);
    // handleDateChange(oneActivity.date);
    setLoading2(false);
  }
  // console.log(activitydate);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const actionDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/activity/${activityId}`);
      navigate("/activity");
    } catch (error) {
      console.log(error);
    }
  };

  function save() {
    saveEdit();
    setShowOne(true);
    navigate("/activity");
    setUpdate(false);
    //set the state of dependencey to true
  }

  const saveEdit = async () => {
    try {
      await axios.patch(`http://localhost:8080/activity/${activityId}`, {
        id: oneActivity.id,
        timeofday: tod,
        rating: rating,
        distance: distance,
        exercise1: exercise1,
        exercise2: exercise2,
        exercise3: exercise3,
        exercise4: exercise4,
        exercise5: exercise5,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="detailscontainer">
      {showone && (
        <div className="details">
          <h1 className="details__header">Activity Summary</h1>
          <div className="details__item">
            <p className="details__item--title">Date:</p>
            <p className="details__item--value">
              {new Date(oneActivity.date * 1000).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="details__item">
            <p className="details__item--title">Type:</p>
            <p className="details__item--value">{oneActivity.type}</p>
          </div>
          <div className="details__item">
            <p className="details__item--title">Time of Day:</p>
            <p className="details__item--value">{oneActivity.timeofday}</p>
          </div>
          <div className="details__item">
            <p className="details__item--title">Rating:</p>
            <p className="details__item--value">{oneActivity.rating}</p>
          </div>
          {oneActivity.distance != null && (
            <div className="details__item">
              <p className="details__item--title">Distance:</p>
              <p className="details__item--value">{oneActivity.distance} Km</p>
            </div>
          )}
          {oneActivity.exercise1 != null && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <p className="details__item--value">{oneActivity.exercise1}</p>
            </div>
          )}
          {oneActivity.exercise2 != null && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <p className="details__item--value">{oneActivity.exercise2}</p>
            </div>
          )}
          {oneActivity.exercise3 != null && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <p className="details__item--value">{oneActivity.exercise3}</p>
            </div>
          )}
          {oneActivity.exercise4 != null && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <p className="details__item--value">{oneActivity.exercise4}</p>
            </div>
          )}
          {oneActivity.exercise5 != null && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <p className="details__item--value">{oneActivity.exercise5}</p>
            </div>
          )}
          <div className="buttons">
            <p className="buttons__button" onClick={() => setShowOne(false)}>
              Edit
            </p>
            <p className="buttons__button" onClick={openModal}>
              Delete
            </p>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Delete Modal"
              className="modal"
              ariaHideApp={false}
            >
              <h3 className="modal__title">
                Are you sure you want to delete this activity? 🗑
              </h3>
              <div className="deletecontainer">
                <button
                  className="deletecontainer__action"
                  onClick={actionDelete}
                >
                  Yes
                </button>
                <button
                  className="deletecontainer__action"
                  onClick={closeModal}
                >
                  No
                </button>
              </div>
            </Modal>
          </div>
        </div>
      )}
      {!showone && (
        <form className="edit">
          <h1 className="details__header">Edit Activity</h1>

          <div className="details__item">
            <Calendar onChange={handleDateChange} value={activitydate} />
          </div>

          <div className="details__item">
            <p className="details__item--title">Time of Day:</p>
            <select
              id="tod"
              name="TimeOfDay"
              className="details__item--value"
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
          <div className="details__item">
            <p className="details__item--tile">Rating:</p>
            <select
              id="rating"
              name="rating"
              className="details__item--value"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="null">...</option>
              <option value="Great">Great</option>
              <option value="Good">Good</option>
              <option value="Okay">Okay</option>
              <option value="Bad">Bad</option>
            </select>
          </div>
          {oneActivity.type === "Cardio" && (
            <div className="details__item">
              <p className="details__item--title">Distance:</p>
              <input
                type="distance"
                placeholder="in KM"
                className="details__item--input"
                value={distance}
                onChange={handleDistanceChange}
              />
            </div>
          )}
          {oneActivity.type === "Workout" && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <select
                id="exercise1"
                name="exercise1"
                className="details__item--input"
                value={exercise1}
                onChange={handleExercise1Change}
              >
                <option value={null}>...</option>
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
          {oneActivity.type === "Workout" && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <select
                id="exercise2"
                name="exercise2"
                className="details__item--input"
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
          {oneActivity.type === "Workout" && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <select
                id="exercise3"
                name="exercise3"
                className="details__item--input"
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
          {oneActivity.type === "Workout" && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <select
                id="exercise4"
                name="exercise4"
                className="details__item--input"
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
          {oneActivity.type === "Workout" && (
            <div className="details__item">
              <p className="details__item--title">Exercise:</p>
              <select
                id="exercise5"
                name="exercise5"
                className="details__item--input"
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

          <div className="buttons">
            <p className="buttons__button" onClick={() => setShowOne(true)}>
              Cancel
            </p>
            <p className="buttons__button" onClick={save}>
              Save
            </p>
          </div>
        </form>
      )}
    </section>
  );
}

export default Details;
