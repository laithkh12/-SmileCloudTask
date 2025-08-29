import type { Pt } from "../App";

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const toDeg = (rad: number) => (rad * 180) / Math.PI;
const vSub = (a: Pt, b: Pt): Pt => ({ x: a.x - b.x, y: a.y - b.y });
const vLen = (p: Pt) => Math.hypot(p.x, p.y);
const vNorm = (p: Pt): Pt => {
  const L = vLen(p) || 1;
  return { x: p.x / L, y: p.y / L };
};
const vScale = (p: Pt, s: number): Pt => ({ x: p.x * s, y: p.y * s });
const vAdd = (a: Pt, b: Pt): Pt => ({ x: a.x + b.x, y: a.y + b.y });

export function angleAt(a: Pt, b: Pt, c: Pt): number {
  const u = vSub(a, b);
  const v = vSub(c, b);
  const nu = vLen(u);
  const nv = vLen(v);
  if (nu === 0 || nv === 0) return 0;
  const cosTheta = clamp((u.x * v.x + u.y * v.y) / (nu * nv), -1, 1);
  return toDeg(Math.acos(cosTheta));
}

export function arcPathAtVertex(a: Pt, b: Pt, c: Pt, r: number): string {
  const u = vNorm(vSub(a, b));
  const v = vNorm(vSub(c, b));
  const p1 = vAdd(b, vScale(u, r));
  const p2 = vAdd(b, vScale(v, r));
  const cross = u.x * v.y - u.y * v.x;
  const sweepFlag = cross > 0 ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweepFlag} ${p2.x} ${p2.y}`;
}

export function angleLabelPos(a: Pt, b: Pt, c: Pt, r: number): Pt {
  const u = vNorm(vSub(a, b));
  const v = vNorm(vSub(c, b));
  let bis = vAdd(u, v);
  if (Math.abs(bis.x) < 1e-6 && Math.abs(bis.y) < 1e-6) {
    bis = { x: -u.y, y: u.x };
  }
  const dir = vNorm(bis);
  return vAdd(b, vScale(dir, r + 16));
}
