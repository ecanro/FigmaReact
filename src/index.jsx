import React from "react";
import ReactDOMClient from "react-dom/client";
import { FreeOnlineCourses } from "./screens/FreeOnlineCourses";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FreeOnlineCourses />);
