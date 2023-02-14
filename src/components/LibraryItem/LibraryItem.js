import "./LibraryItem.scss";
import { useState } from "react";

function LibraryItem(props) {
  const [show, setShow] = useState(false);

  const clickItem = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <section className="libraryitemcontainer">
      <div className="libraryitem" onClick={clickItem}>
        <h2 className="libraryitem__title">{props.name}</h2>
        {show && (
          <div className="libraryitem__body">
            <div className="libraryitem__item">
              <p className="libraryitem__item--heading">Muscle Group:</p>
              <p className="libraryitem__item--text">{props.muscle}</p>
            </div>
            <div className="libraryitem__item">
              <p className="libraryitem__item--heading">Type:</p>
              <p className="libraryitem__item--text">{props.type}</p>
            </div>

            <div className="libraryitem__item">
              <p className="libraryitem__item--heading">Equipment:</p>
              <p className="libraryitem__item--text">{props.equipment}</p>
            </div>

            <div className="libraryitem__item">
              <p className="libraryitem__item--heading">Instructions:</p>
              <p className="libraryitem__item--text">{props.instructions}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LibraryItem;
