import Calendar from "../../molecules/Calendar";
import "./styles.scss";

function CalendarPage() {
  const monthNamesShort = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const daysNameShort = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="content">
        <Calendar
          monthNamesShort={monthNamesShort}
          dayNamesShort={daysNameShort}
        />
      </div>
    </div>
  );
}

export default CalendarPage;
