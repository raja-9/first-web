from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample user data (in-memory storage for now)
users = {}
feedbacks = []

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "receiver")
    
    if email in users:
        return jsonify({"message": "User already exists, please login"}), 400
    
    users[email] = {"password": password, "role": role}
    return jsonify({"message": "Signup successful, please login"}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    
    user = users.get(email)
    if not user:
        return jsonify({"message": "User not found, please sign up first"}), 404
    
    if user["password"] != password:
        return jsonify({"message": "Invalid credentials"}), 401
    
    return jsonify({"message": "Login successful", "role": user["role"]}), 200

@app.route("/feedback", methods=["POST"])
def submit_feedback():
    data = request.json
    feedback = data.get("feedback")
    
    if feedback:
        feedbacks.append(feedback)
        return jsonify({"message": "Feedback submitted successfully"}), 200
    return jsonify({"message": "Feedback cannot be empty"}), 400

if __name__ == "__main__":
    app.run(debug=True)
