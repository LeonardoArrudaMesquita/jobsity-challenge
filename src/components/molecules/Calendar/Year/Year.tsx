export interface YearProps {
  year: number;
  onChangeYear: (year: number) => void;
}

export default function Year({ year, onChangeYear }: YearProps) {
  const previousYear = year - 1;
  const nextYear = year + 1;
  return (
    <div className="year">
      <div
        className="triangle-left"
        onClick={() => onChangeYear(previousYear)}
      />
      <span className="year__text">{year}</span>
      <div className="triangle-right" onClick={() => onChangeYear(nextYear)} />
    </div>
  );
}
