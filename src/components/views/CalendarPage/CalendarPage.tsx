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
    "Dez"
  ];

  const daysNameShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

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
