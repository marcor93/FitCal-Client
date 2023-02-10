import "./ActivityTable.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivityItem from "../ActivityItem/ActivityItem";

function ActivityTable() {
  const [isLoading, setIsLoading] = useState("false");
  const [activityData, setData] = useState([]);
  const API = "http://localhost:8080/activity";

  useEffect(() => {
    const getActivity = async () => {
      try {
        const { data } = await axios.get(API);
        setData(data);
        setIsLoading(false);
      } catch {
        console.log("error");
      }
    };
    getActivity();
  }, []);
  if (isLoading) {
    return <div className="loading">Loading Activity Data...⌛</div>;
  }

  return (
    <section className="acttablecontainer">
      <div className="acttable">
        <div className="acttable__header">
          <p className="acttable__header--text">Date</p>
          <p className="acttable__header--text">Type</p>
          <p className="acttable__header--text">Time of Day</p>
          <p className="acttable__header--text">Rating</p>
        </div>
        <div className="actbody">
          {activityData.map((item) => (
            <ActivityItem
              key={item.id}
              id={item.id}
              date={item.date}
              type={item.type}
              tod={item.timeofday}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ActivityTable;
