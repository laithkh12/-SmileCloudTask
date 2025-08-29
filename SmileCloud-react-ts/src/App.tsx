import { Routes, Route, Navigate } from "react-router-dom";
import InputPage from "./pages/InputPage";
import DisplayPage from "./pages/DisplayPage";
import { useState } from "react";

export type Pt = { x: number; y: number };

export default function App() {
  const [points, setPoints] = useState<[Pt, Pt, Pt]>([
    { x: 150, y: 600 },
    { x: 400, y: 120 },
    { x: 650, y: 620 },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/input" replace />} />
      <Route path="/input" element={<InputPage points={points} setPoints={setPoints} />} />
      <Route path="/display" element={<DisplayPage points={points} />} />
    </Routes>
  );
}
