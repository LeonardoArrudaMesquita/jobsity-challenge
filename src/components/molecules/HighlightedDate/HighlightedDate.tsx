import { format } from "date-fns";

export interface HighlightedDateProps {
  date: Date;
}

export default function HighlightedDate({ date }: HighlightedDateProps) {
  return (
    <div className="highlighted-date">
      <h1 className="highlighted-date__day">{format(date, "d")}</h1>
      <span className="highlighted-date__day-of-week">
        {format(date, "iiii")}
      </span>
    </div>
  );
}
