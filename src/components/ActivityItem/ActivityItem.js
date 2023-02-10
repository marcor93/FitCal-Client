import "./ActivityItem.scss";

function ActivityItem(props) {
  return (
    <section className="actitem">
      <div className="actitem__column">{props.date}</div>
      <div className="actitem__column">{props.type}</div>
      <div className="actitem__column">{props.tod}</div>
      <div className="actitem__column">{props.rating}</div>
    </section>
  );
}

export default ActivityItem;
