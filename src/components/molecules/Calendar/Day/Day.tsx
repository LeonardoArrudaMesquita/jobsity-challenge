import { Reminder } from "../../../../types/Reminder";

export interface DayProps {
  day: number;
  disabled: boolean;
  isSelected: boolean;
  onClick: (day: number) => void;
  reminders: Reminder[];
}

export default function Day({
  day,
  disabled,
  isSelected,
  onClick,
  reminders
}: DayProps) {
  return (
    <div
      className={`col cell day day--${disabled ? "disabled" : "enabled"}`}
      onClick={() => !disabled && onClick(day)}
    >
      <span className={`day__text ${isSelected ? "day__selected" : ""}`}>
        {day}
      </span>
      {Boolean(reminders.length) && (
        <p className="day__reminder">{reminders.length} Reminder(s)!</p>
      )}
    </div>
  );
}
