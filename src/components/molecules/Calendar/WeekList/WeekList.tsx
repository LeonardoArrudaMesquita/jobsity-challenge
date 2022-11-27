import "./styles.scss";

export interface WeekListProps {
  dayNamesShort: string[];
}

export default function WeekList({ dayNamesShort }: WeekListProps) {
  return (
    <div className="week-list">
      {dayNamesShort.map((dayName) => (
        <span className="day-name-short-text">{dayName.toUpperCase()}</span>
      ))}
    </div>
  );
}
