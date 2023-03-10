import "./Library.scss";
import axios from "axios";
import { useState } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";

function Library() {
  const [libData, setLibData] = useState("");
  const [loadingLib, setLibLoading] = useState(true);
  const [selectedEexercise, setSelectedExercise] = useState("");
  const [showMore, setShowMore] = useState(false);
  const URL = "https://api.api-ninjas.com/v1/exercises?muscle=";

  const handleselectedEexerciseChange = (e) => {
    setSelectedExercise(e.target.value);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleGo = () => {
    axios
      .get(URL + selectedEexercise, {
        headers: { "X-Api-Key": process.env.REACT_APP_API_Key },
      })
      .then(function (response) {
        setLibData(response.data);
        setLibLoading(false);
      });
  };

  return (
    <section className="Librarycontainer">
      <div className="library">
        <p className="library__button" onClick={handleShowMore}>
          Checkout Exercise Library
        </p>
        {showMore && (
          <div className="library__querry">
            <div className="library__querry--container">
              <p className="library__querry--text">Show me exercises for:</p>
              <select
                id="selectedEexercise"
                name="selectedEexercise"
                className="querry--text"
                value={selectedEexercise}
                onChange={handleselectedEexerciseChange}
              >
                <option value="">...</option>
                <option value="abdominals">Abs</option>
                <option value="biceps">Biceps</option>
                <option value="calves">Calves</option>
                <option value="chest">Chest</option>
                <option value="forearms">Forearms</option>
                <option value="glutes">Glutes</option>
                <option value="lower_back">Lower Back</option>
                <option value="middle_back">Middle Back</option>
                <option value="quadriceps">Quadriceps</option>
                <option value="triceps">Triceps</option>
              </select>
            </div>
            <button className="library__querry--button" onClick={handleGo}>
              GO!
            </button>
          </div>
        )}
        <div className="libraryitems">
          {libData &&
            libData.map((item) => (
              <LibraryItem
                key={item.name}
                name={item.name}
                type={item.type}
                muscle={item.muscle}
                equipment={item.equipment}
                difficulty={item.difficulty}
                instructions={item.instructions}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default Library;
