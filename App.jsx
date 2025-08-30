
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import DeadlineForm from "./Components/DeadlineForm";
import ReminderList from "./Components/ReminderList";
import CoursesPage from "./CoursePage/CoursesPage";   // ✅ Correct import

import "./index.css";

function App() {
  const [reminders, setReminders] = useState([]);

  // Load saved reminders from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reminders"));
    if (saved) setReminders(saved);
  }, []);

  // Save reminders to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  return (
    <Router>
      <div className="container">
        <Header />

        {/* ✅ Simple navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>🏠 Home</Link>
          <Link to="/courses">📚 Courses</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>📌 Deadlines & Reminders</h2>
                <DeadlineForm setReminders={setReminders} />
                <ReminderList
                  reminders={reminders}
                  setReminders={setReminders}
                />
              </>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



