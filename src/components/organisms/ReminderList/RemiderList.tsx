import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Reminder } from "../../../types/Reminder";
import IconButton from "../../atoms/IconButton";

export interface ReminderListProps {
  reminders: Reminder[];
  onEditClick: (reminder: Reminder) => void;
  onDeleteClick: (reminder: Reminder) => void;
}

export default function ReminderList({
  reminders,
  onEditClick,
  onDeleteClick
}: ReminderListProps) {
  return (
    <div>
      <span className="bold">Reminders</span>
      {reminders.length ? (
        <ul>
          {reminders.map((reminder) => (
            <li className="reminder__item">
              <p>
                {reminder.description} ({reminder.time}h)
              </p>
              <div className="reminder__buttons">
                <IconButton
                  icon={faEdit}
                  onClick={() => onEditClick(reminder)}
                  color="white"
                />
                <IconButton
                  icon={faTrash}
                  onClick={() => onDeleteClick(reminder)}
                  color="white"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no reminders this day</p>
      )}
    </div>
  );
}
