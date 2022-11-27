export interface WeekListProps {
  dayNamesShort: string[];
}

export default function WeekList({ dayNamesShort }: WeekListProps) {
  return (
    <div className="row week-list">
      {dayNamesShort.map((dayName) => (
        <span className="col col-center day-name-short-text">
          {dayName.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
