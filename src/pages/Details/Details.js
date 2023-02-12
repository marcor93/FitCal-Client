import "./Details.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function Details() {
  const { activityId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [oneActivity, setOne] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const API = "http://localhost:8080/activity/" + activityId;

  useEffect(() => {
    const getOne = async () => {
      try {
        const { data } = await axios.get(API);
        setOne(data);
        setLoading(false);
      } catch {
        console.log("error");
      }
    };
    getOne();
  }, []);

  if (isLoading) {
    return <p>... Loading your data</p>;
  }

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

  return (
    <section className="detailscontainer">
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
            <p className="details__item--title">Exercise 1:</p>
            <p className="details__item--value">{oneActivity.exercise1}</p>
          </div>
        )}
        {oneActivity.exercise2 != null && (
          <div className="details__item">
            <p className="details__item--title">Exercise 2:</p>
            <p className="details__item--value">{oneActivity.exercise2}</p>
          </div>
        )}
        {oneActivity.exercise3 != null && (
          <div className="details__item">
            <p className="details__item--title">Exercise 3:</p>
            <p className="details__item--value">{oneActivity.exercise3}</p>
          </div>
        )}
        {oneActivity.exercise4 != null && (
          <div className="details__item">
            <p className="details__item--title">Exercise 4:</p>
            <p className="details__item--value">{oneActivity.exercise4}</p>
          </div>
        )}
        {oneActivity.exercise5 != null && (
          <div className="details__item">
            <p className="details__item--title">Exercise 5:</p>
            <p className="details__item--value">{oneActivity.exercise5}</p>
          </div>
        )}
      </div>
      <div className="buttons">
        <p className="buttons__button">Edit</p>
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
            <button className="deletecontainer__action" onClick={actionDelete}>
              Yes
            </button>
            <button className="deletecontainer__action" onClick={closeModal}>
              No
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default Details;
