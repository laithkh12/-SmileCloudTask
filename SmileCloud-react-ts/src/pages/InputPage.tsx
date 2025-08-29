import { useNavigate } from "react-router-dom";
import type { Pt } from "../App";
import PointForm from "../components/PointForm";

interface Props {
  points: [Pt, Pt, Pt];
  setPoints: (pts: [Pt, Pt, Pt]) => void;
}

export default function InputPage({ points, setPoints }: Props) {
  const navigate = useNavigate();

  const onChangePoint = (idx: 0 | 1 | 2, key: "x" | "y", val: string) => {
    const num = Number(val);
    if (!Number.isFinite(num)) return;
    const next = points.map((p, i) => (i === idx ? { ...p, [key]: num } : p)) as [Pt, Pt, Pt];
    setPoints(next);
  };

  return (
    <div className="container">
      <h1>Enter three points</h1>
      <div className="form-grid">
        {["A", "B", "C"].map((label, idx) => (
          <PointForm
            key={label}
            label={label}
            point={points[idx]}
            onChange={(key, val) => onChangePoint(idx as 0 | 1 | 2, key, val)}
          />
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button className="primary" onClick={() => navigate("/display")}>
          Show Triangle
        </button>
      </div>
    </div>
  );
}
