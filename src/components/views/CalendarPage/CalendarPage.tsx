import { useState } from "react";
import Calendar from "../../molecules/Calendar";
import ReminderForm from "../../organisms/ReminderForm";

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
      <div className="sidebar">
        <ReminderForm />
      </div>
      <div className="content">
        <Calendar current={current} setCurrent={setCurrent} locales={locales} />
      </div>
    </div>
  );
}

export default CalendarPage;
