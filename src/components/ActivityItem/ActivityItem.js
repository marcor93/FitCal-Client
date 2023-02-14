import "./ActivityItem.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function ActivityItem(props) {
  const thedate = new Date(props.date * 1000).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const [altmonth, setAltMonth] = useState();
  const [loadMonth, setLoadMonth] = useState(true);
  const oddMonths = [
    "January",
    "March",
    "May",
    "July",
    "September",
    "November",
  ];

  if (loadMonth) {
    if (oddMonths.some((e) => thedate.includes(e))) {
      setAltMonth("oddMonth");
      setLoadMonth(false);
    } else {
      setAltMonth("evenMonth");
      setLoadMonth(false);
    }
  }

  console.log(altmonth);

  return (
    <section className={`act ${altmonth}`}>
      <Link className="actitem" to={"/activity/" + props.id}>
        <div className="actitem__column columndate">{thedate}</div>
        <div className="actitem__column">{props.type}</div>
        <div className="actitem__column">{props.tod}</div>
        <div className="actitem__column">{props.rating}</div>
      </Link>
    </section>
  );
}

export default ActivityItem;
