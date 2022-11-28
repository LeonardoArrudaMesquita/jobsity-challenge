export interface DayProps {
  day: number;
  disabled: boolean;
  isSelected: boolean;
  onClick: (day: number) => void;
}

export default function Day({ day, disabled, isSelected, onClick }: DayProps) {
  return (
    <div
      className={`col cell day day--${disabled ? "disabled" : "enabled"}`}
      onClick={() => !disabled && onClick(day)}
    >
      <span className={`day__text ${isSelected ? "day__selected" : ""}`}>
        {day}
      </span>
    </div>
  );
}
