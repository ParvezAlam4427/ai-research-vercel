
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import ResearchAssistant from "./components/ResearchAssistant";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/research" element={
        <ProtectedRoute>
          <ResearchAssistant />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
