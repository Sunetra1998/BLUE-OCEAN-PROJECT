import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles.scss";
import { Assignment, Charts, Library, Login, Reports, RiskScenarios, UserManagement } from "./components";
import Home from "./Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/risk-scenarios" element={<RiskScenarios/>} />
      <Route path="/assignment" element={<Assignment />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
