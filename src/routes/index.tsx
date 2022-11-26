import {
  BrowserRouter,
  Routes as RouterDOMRoutes,
  Route,
} from "react-router-dom";

import App from "../components/views/App";
import Calendar from "../components/views/Calendar";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterDOMRoutes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<Calendar />} />
      </RouterDOMRoutes>
    </BrowserRouter>
  );
}
