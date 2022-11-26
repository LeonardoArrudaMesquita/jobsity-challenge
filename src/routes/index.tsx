import React from "react";
import {
  BrowserRouter,
  Routes as RouterDOMRoutes,
  Route,
} from "react-router-dom";

import App from "../pages/App";
import Calendar from "../pages/Calendar";

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
