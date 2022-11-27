import { useState } from "react";
import Calendar from "../../molecules/Calendar";

function CalendarPage() {
  const [current, setCurrent] = useState<Date>(new Date());
  const locales = {
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    monthNamesShort: [
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
    ]
  };

  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="content">
        <Calendar current={current} setCurrent={setCurrent} locales={locales} />
      </div>
    </div>
  );
}

export default CalendarPage;
