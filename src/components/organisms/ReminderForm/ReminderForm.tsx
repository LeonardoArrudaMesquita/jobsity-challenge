import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Reminder } from "../../../types/Reminder";
import useForecast from "../../../hooks/useForecast";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ReminderFormProps {
  onSave: (reminder: Reminder) => void;
  onClose: () => void;
  reminder?: Reminder;
}

const schema = yup
  .object({
    description: yup
      .string()
      .max(30, "Max. 30 characters")
      .required("Description is required"),
    time: yup.string().required("Time is required"),
    city: yup.string().required("City is required")
  })
  .required();

export default function ReminderForm({
  onSave,
  onClose,
  reminder
}: ReminderFormProps) {
  // const [forecastCity, setForecastCity] = useState()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<Reminder>({
    defaultValues: reminder,
    resolver: yupResolver(schema)
  });
  const formValues = watch();

  const { getForecastByCity, forecast } = useForecast();

  useEffect(() => {
    getForecastByCity(formValues.city);
  }, [formValues.city]);

  return (
    <form className="reminder-form" onSubmit={handleSubmit(onSave)}>
      <div className="mb-sm">
        <label htmlFor="description">Description:</label>
        <input {...register("description")} />
        <p>{errors.description?.message}</p>
      </div>

      <div className="mb-sm">
        <label htmlFor="time">Time:</label>
        <input type="time" {...register("time")} />
        <p className="mb-sm">{errors.time?.message}</p>
      </div>

      <div className="mb-sm">
        <label htmlFor="city">City:</label>
        <input {...register("city")} />
        <p className="mb-sm">
          Forecast: {forecast ? forecast : "Add a City, please!"}
        </p>
        <p className="mb-sm">{errors.city?.message}</p>
      </div>

      <input
        type="submit"
        className="mt-md mb-sm"
        value="Save"
        disabled={!isValid}
      />
      <button onClick={() => onClose()}>Cancel</button>
    </form>
  );
}
