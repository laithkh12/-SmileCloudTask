# SmileCloudTask – Python Flask Solution

## Task Description
This is a Python implementation of the SmileCloud assignment.  
It follows the same two-page structure as the React solution:

1. **Input Page (/)**
   - A form where the user enters coordinates for 3 points (A, B, C).  
   - Each point has x, y values.  
   - A submit button sends the data to the server.  

2. **Display Page (/display)**
   - After submitting, the server calculates the triangle’s 3 interior angles.  
   - A matplotlib-generated image of the triangle is displayed, with arcs and angle labels.  
   - A link allows returning back to the input page.

---

## Tech Stack
- **Python 3.9+**
- **Flask** – for serving two pages (input + display).  
- **Matplotlib** – for drawing the triangle and angles.  
- **NumPy** – for vector math and angle calculation.  

---

## Installation

1. Clone the repository and go into the Python solution folder:
git clone https://github.com/laithkh12/SmileCloudTask.git

cd SmileCloudTask/python-solution
2. Create a virtual environment (recommended):

python -m venv venv
source venv/bin/activate # Linux/Mac
venv\Scripts\activate # Windows

3. Install requirements:
pip install flask matplotlib numpy

---

## Run the App
python app.py

Then open:  
http://127.0.0.1:5000

---

## How It Works
- The **Input Page** (`input.html`) lets the user type in 3 coordinate pairs.  
- On submit, Flask computes the angles using dot product and arccos:  
θ = arccos( (u·v) / (|u||v|) )
- Matplotlib renders the triangle, marks points A/B/C, and labels each angle.  
- The plot is saved in memory and sent as a base64 PNG to the **Display Page**.  
- The display page (`display.html`) shows the triangle image and a link back.  

---

## Example
If you enter:
A (100, 100)
B (100, 300)
C (300, 100)
The app will display a right triangle:
- ∠A ≈ 90°  
- ∠B ≈ 45°  
- ∠C ≈ 45°  

---

## Project Structure
app.py
templates/
input.html
display.html

---

## Conclusion
This Python solution matches the assignment’s two-page requirement:  
- **Input Page** for receiving points.  
- **Display Page** for rendering the triangle and showing computed angles.  

It demonstrates use of Flask for simple routing, NumPy for math, and Matplotlib for visualization.
