import {
  BrowserRouter,
  Routes as RouterDOMRoutes,
  Route
} from "react-router-dom";

import App from "../components/views/App";
import CalendarPage from "../components/views/CalendarPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterDOMRoutes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </RouterDOMRoutes>
    </BrowserRouter>
  );
}
