import type { Pt } from "../App";
import { angleAt, arcPathAtVertex, angleLabelPos } from "../utils/geometry";

interface Props {
  points: [Pt, Pt, Pt];
}

export default function TriangleSVG({ points }: Props) {
  const [A, B, C] = points;

  const angles = [
    angleAt(B, A, C),
    angleAt(A, B, C),
    angleAt(A, C, B),
  ];

  const r = 40;

  return (
    <svg width={800} height={800} className="triangle-svg">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="#c7d2fe55"
        stroke="#4f46e5"
        strokeWidth={2}
      />

      {[A, B, C].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="#111827" />
      ))}

      <path d={arcPathAtVertex(B, A, C, r)} stroke="#111827" fill="none" />
      <path d={arcPathAtVertex(A, B, C, r)} stroke="#111827" fill="none" />
      <path d={arcPathAtVertex(A, C, B, r)} stroke="#111827" fill="none" />

      {[
        { p: angleLabelPos(B, A, C, r), val: angles[0], tag: "∠A" },
        { p: angleLabelPos(A, B, C, r), val: angles[1], tag: "∠B" },
        { p: angleLabelPos(A, C, B, r), val: angles[2], tag: "∠C" },
      ].map(({ p, val, tag }, i) => (
        <text key={i} x={p.x} y={p.y} textAnchor="middle" fontSize={14}>
          {tag} {val.toFixed(1)}°
        </text>
      ))}
    </svg>
  );
}
