import { format } from "date-fns";

export interface DayProps {
  currentDate: Date;
  disabled: boolean;
}

export default function Day({ currentDate, disabled }: DayProps) {
  const dateFormat = "D";

  return (
    <div className={`day--${disabled ? "disabled" : "enabled"}`}>
      <span>{format(currentDate, dateFormat)}</span>
    </div>
  );
}
