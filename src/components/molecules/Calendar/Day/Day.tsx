import { format } from "date-fns";

import "./styles.scss";
export interface DayProps {
  currentDate: Date;
  disabled: boolean;
}

export default function Day({ currentDate, disabled }: DayProps) {
  const dateFormat = "d";

  return (
    <div className={`col cell day--${disabled ? "disabled" : "enabled"}`}>
      <span className="day__text">{format(currentDate, dateFormat)}</span>
    </div>
  );
}
