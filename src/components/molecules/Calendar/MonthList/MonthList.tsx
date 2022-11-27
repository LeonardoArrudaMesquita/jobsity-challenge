import MonthButton from "../MonthButton";

export interface MonthListProps {
  monthNames: string[];
  onChangeMonth: (monthNumber: number) => void;
  month: number;
}

export default function MonthList({
  month,
  monthNames,
  onChangeMonth
}: MonthListProps) {
  return (
    <div className="month-list-container">
      {monthNames.map((monthName, monthNumber) => {
        const isSelectedMonth = month === monthNumber;

        return (
          <MonthButton
            month={monthName}
            onMonthClick={() => onChangeMonth(monthNumber)}
            isSelected={isSelectedMonth}
          />
        );
      })}
    </div>
  );
}
