import type { Pt } from "../App";

interface Props {
  label: string;
  point: Pt;
  onChange: (key: "x" | "y", val: string) => void;
}

export default function PointForm({ label, point, onChange }: Props) {
  return (
    <div className="point-form">
      <div className="point-form__title">Point {label}</div>
      <div className="point-form__inputs">
        <div className="point-form__field">
          <label>x</label>
          <input
            type="number"
            value={point.x}
            onChange={(e) => onChange("x", e.target.value)}
          />
        </div>
        <div className="point-form__field">
          <label>y</label>
          <input
            type="number"
            value={point.y}
            onChange={(e) => onChange("y", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
