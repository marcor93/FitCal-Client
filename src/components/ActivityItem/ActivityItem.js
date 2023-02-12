import "./ActivityItem.scss";
import { Link } from "react-router-dom";

function ActivityItem(props) {
  return (
    <section>
      <Link className="actitem" to={"/activity/" + props.id}>
        <div className="actitem__column">
          {new Date(props.date * 1000).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </div>
        <div className="actitem__column">{props.type}</div>
        <div className="actitem__column">{props.tod}</div>
        <div className="actitem__column">{props.rating}</div>
      </Link>
    </section>
  );
}

export default ActivityItem;

// {new Date(Date.now()).toLocaleDateString("en-US", {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
// })}
