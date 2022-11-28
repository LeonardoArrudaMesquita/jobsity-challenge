import { useState } from "react";

import { format } from "date-fns";

import { Reminder } from "../../../types/Reminder";
import Calendar from "../../molecules/Calendar";
import HighlightedDate from "../../molecules/HighlightedDate";
import ReminderForm from "../../organisms/ReminderForm";
import ReminderList from "../../organisms/ReminderList";

function CalendarPage() {
  const [current, setCurrent] = useState<Date>(new Date());
  const reminderInitialValue = {
    id: 0,
    description: "",
    city: "",
    date: current,
    time: ""
  };
  const [reminder, setReminder] = useState<Reminder>(reminderInitialValue);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isReminderFormOpen, setIsReminderFormOpen] = useState(false);
  const locales = {
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  };

  const filteredReminders = reminders.filter(
    (reminder) =>
      format(reminder.date, "yyyy-MM-dd") === format(current, "yyyy-MM-dd")
  );

  const handleDeleteReminder = (reminderToDelete: Reminder) => {
    const remindersUpdated = reminders.filter(
      (reminder) => reminder.id !== reminderToDelete.id
    );

    setReminders(remindersUpdated);
  };

  const handleEditReminder = (reminder: Reminder) => {
    setIsReminderFormOpen(true);
    setReminder(reminder);
  };

  const editReminder = (reminderToEdit: Reminder) => {
    const filteredReminders = reminders.filter(
      (reminder) => reminder.id !== reminderToEdit.id
    );

    setReminders([...filteredReminders, reminderToEdit]);
  };

  const createReminder = (reminderToCreate: Reminder) => {
    const lastId = reminders[reminders.length - 1]?.id || 0;
    const idIncremented = lastId + 1;
    const reminder = {
      ...reminderToCreate,
      id: idIncremented
    };

    setReminders((prevReminders) => [...prevReminders, reminder]);
  };

  const handleSaveReminder = (reminder: Reminder) => {
    setIsReminderFormOpen(false);
    reminder.id ? editReminder(reminder) : createReminder(reminder);
  };

  const handleNewReminder = () => {
    setIsReminderFormOpen(true);
    setReminder(reminderInitialValue);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <HighlightedDate date={current} />
        {isReminderFormOpen ? (
          <ReminderForm
            onSave={(reminder) => handleSaveReminder(reminder)}
            onClose={() => setIsReminderFormOpen(false)}
            reminder={reminder}
          />
        ) : (
          <div>
            <ReminderList
              reminders={filteredReminders}
              onEditClick={(reminder) => handleEditReminder(reminder)}
              onDeleteClick={(reminder) => handleDeleteReminder(reminder)}
            />
            <button className="mt-md" onClick={() => handleNewReminder()}>
              Add a new Reminder
            </button>
          </div>
        )}
      </div>
      <div className="content">
        <Calendar
          current={current}
          setCurrent={setCurrent}
          locales={locales}
          reminders={reminders}
        />
      </div>
    </div>
  );
}

export default CalendarPage;
