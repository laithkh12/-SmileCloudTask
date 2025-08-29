# SmileCloudTask – React + TypeScript Solution

## Task Description
This assignment implements a two-page web app where the user can enter three points (x, y coordinates) and then visualize the corresponding triangle, including its interior angles.

Requirements from the task:
1. Two pages
   - Input Page  
     - Form for entering 3 points (A, B, C).  
     - Button to navigate to display page.  
     - Inputs are assumed valid (no validation needed).  

   - Display Page  
     - Render the triangle inside an 800×800 canvas/SVG.  
     - Show rounded arcs at each vertex.  
     - Display numeric values of the three interior angles inside the triangle.  

2. Deliverables  
   - GitHub repository with solution.  
   - Short answers to design/implementation questions.  

3. Evaluation  
   - Code quality.  
   - Mathematical correctness.  
   - Clear UI and structure.  

---

## Tech Stack
- React 18 + TypeScript (scaffolded with Vite)  
- react-router-dom for navigation between pages  
- SVG for rendering triangle and angles  
- Plain CSS (styles.css) for styling  

---

## Getting Started

1. Clone the repository
git clone https://github.com/laithkh12/SmileCloudTask.git

cd SmileCloudTask

2. Install dependencies
npm install

3. Run locally
npm run dev
Then open http://localhost:5173 in your browser.

---

## Implementation Details

### Drawing Method
- Chose SVG because it allows precise vector graphics, simple `<polygon>` for the triangle, `<path>` arcs for angles, and `<text>` labels.  
- Keeps code simple and readable compared to HTML Canvas.

### Angle Calculation
- For an angle at vertex B, with points A–B–C:  
  - Compute vectors u = A – B, v = C – B.  
  - Use dot product:  
    θ = arccos( (u·v) / (|u||v|) )  
  - Clamp floating-point errors and convert to degrees.  
- Label position is calculated along the angle bisector vector.  

### Challenges
- Correctly orienting SVG arc paths (sweep direction).  
- Handling near-degenerate cases (collinear or identical points).  
- Getting labels placed cleanly inside the triangle.

### Assumptions
- Inputs are valid numbers.  
- No explicit error handling for invalid or degenerate triangles.  
- Minor floating-point rounding (e.g. 89.9° instead of 90°).  

### External Aids
- Official React + Vite documentation.  
- SVG path arc reference.  
- Assistance from ChatGPT (OpenAI) for structuring and reviewing code.  

---

## Demo Example
Input points:
A (100, 100)
B (100, 300)
C (300, 100)
Output:
- Triangle drawn inside 800×800 SVG.  
- ∠A ≈ 90°, ∠B ≈ 45°, ∠C ≈ 45°.  

---

## Project Structure
src/
main.tsx
App.tsx
pages/
InputPage.tsx
DisplayPage.tsx
components/
PointForm.tsx
TriangleSVG.tsx
utils/
geometry.ts
styles.css

---

## Conclusion
This solution demonstrates:
- Clean modular structure with React + TS.  
- Correct use of vector math for angles.  
- Clear, styled UI with two-page flow.  
- A professional approach to the assignment.  
