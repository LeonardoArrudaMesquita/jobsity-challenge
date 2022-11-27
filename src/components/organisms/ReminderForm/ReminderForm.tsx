import axios from "axios";
import Input from "../../atoms/Input";

export interface ReminderForm {}

export default function ReminderForm({}: ReminderForm) {
  const handleCity = async (city: string) => {};

  return (
    <div className="reminder-form">
      <span>Description:</span>
      <textarea maxLength={30} />
      <span>Time:</span>
      <Input type="time" />
      <span>City:</span>
      <Input onChange={(event) => handleCity(event.target.value)} />
      <button>Save</button>
    </div>
  );
}
