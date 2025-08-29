import { useNavigate } from "react-router-dom";
import type { Pt } from "../App";
import TriangleSVG from "../components/TriangleSVG";

interface Props {
  points: [Pt, Pt, Pt];
}

export default function DisplayPage({ points }: Props) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Triangle Display</h1>
      <TriangleSVG points={points} />
      <div style={{ marginTop: "1rem" }}>
        <button className="secondary" onClick={() => navigate("/input")}>
          Back to Input
        </button>
      </div>
    </div>
  );
}
