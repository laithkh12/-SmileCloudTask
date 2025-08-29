from flask import Flask, render_template, request
import numpy as np
import matplotlib.pyplot as plt
import io, base64

app = Flask(__name__)

def angle(a, b, c):
    ab = a - b
    cb = c - b
    cos_theta = np.dot(ab, cb) / (np.linalg.norm(ab) * np.linalg.norm(cb))
    cos_theta = np.clip(cos_theta, -1.0, 1.0)
    return np.degrees(np.arccos(cos_theta))

@app.route("/", methods=["GET", "POST"])
def input_page():
    if request.method == "POST":
        try:
            ax, ay = float(request.form["ax"]), float(request.form["ay"])
            bx, by = float(request.form["bx"]), float(request.form["by"])
            cx, cy = float(request.form["cx"]), float(request.form["cy"])
            return render_triangle(np.array([ax, ay]), np.array([bx, by]), np.array([cx, cy]))
        except Exception as e:
            return f"<h2>Error: {e}</h2>"
    return render_template("input.html")

def render_triangle(A, B, C):
    ang_A = angle(B, A, C)
    ang_B = angle(A, B, C)
    ang_C = angle(A, C, B)

    plt.figure(figsize=(6,6))
    x = [A[0], B[0], C[0], A[0]]
    y = [A[1], B[1], C[1], A[1]]
    plt.plot(x, y, 'b-', linewidth=2)
    plt.fill(x, y, 'skyblue', alpha=0.3)

    for p, name in zip([A,B,C], ["A","B","C"]):
        plt.scatter(*p, c="black")
        plt.text(p[0]+10, p[1]+10, name, fontsize=12)

    plt.text(A[0], A[1]-20, f"{ang_A:.1f}°", ha='center')
    plt.text(B[0]-20, B[1], f"{ang_B:.1f}°", ha='center')
    plt.text(C[0], C[1]-20, f"{ang_C:.1f}°", ha='center')

    plt.axis("equal")
    plt.title("Triangle with Angles")

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode("utf-8")
    plt.close()
    return render_template("display.html", img_data=img_base64)

if __name__ == "__main__":
    app.run(debug=True)
