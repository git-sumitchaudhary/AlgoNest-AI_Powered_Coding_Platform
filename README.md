
# 🚀 AlgoNest: AI-Powered Coding Platform

**AlgoNest** is an AI-integrated coding platform built to revolutionize the way students and developers learn **Data Structures and Algorithms (DSA)**. Acting as an intelligent tutor, AlgoNest provides **step-by-step guidance**, not just answers—promoting deep conceptual understanding and long-term skill development.

---

## 🎯 Project Aim & Usefulness

AlgoNest serves as your **personal DSA tutor**, assisting you in mastering coding problems through a rich suite of AI-driven features:

- 🧠 **Hint Provision** – Step-by-step hints to encourage problem-solving.
- 🔍 **Code Review** – Intelligent debugging with clear suggestions.
- 🧮 **Optimal Solution Guidance** – Thorough explanations with algorithmic intuition.
- 📊 **Complexity Analysis** – Insight into time/space trade-offs.
- 🧭 **Approach Suggestion** – From brute force to optimized techniques.
- 🧪 **Test Case Assistance** – Helps create additional test cases for edge coverage.

> 💡 AlgoNest is focused on *learning*, *intuition building*, and *best practices*—not spoon-feeding solutions.

---

## 🛠️ Tech Stack

### 🔧 Backend – Node.js + Express.js
- `Node.js`, `Express.js`, `MongoDB` + `Mongoose`
- `Redis` – Session management and caching
- `Google Gemini API` – Core AI capabilities
- `bcrypt`, `jsonwebtoken`, `cookie-parser` – Secure authentication
- `cloudinary` – Media handling
- `axios`, `cors`, `dotenv`, `validator`

### 🖥️ Frontend – React + Vite
- `React`, `Redux Toolkit`, `React Router`
- `Tailwind CSS`, `DaisyUI`
- `Monaco Editor` – Code editing interface
- `React Hook Form`, `Zod`
- `Lucide React` – Icon library
- `axios` – Backend communication

---

## 🧱 Architecture Overview

```text
[React Frontend]
  ↳ User Interaction, Code Editor, AI Chat Interface

[Node.js/Express Backend]
  ↳ API Logic, AI Prompting, Session Management

[MongoDB + Redis]
  ↳ Persistent Storage + In-Memory Caching

[Google Gemini]
  ↳ Intelligent DSA Tutoring via Prompt Engineering
```

---

## 🔑 Core Functionalities

### 1. 👤 User Authentication
- Signup/Login
- JWT-based session handling
- Secure credentials with bcrypt

### 2. 📚 Problem Management
- Create & fetch coding problems
- Backend routes: `/problem`

### 3. 🧾 Code Submission & Evaluation
- Submit code solutions
- Backend routes: `/submission`

### 4. 🤖 AI Tutoring (Doubt Solving)
- Context-aware AI responses (hints, reviews, optimal code)
- Uses Gemini via `/ai` route
- Prompts include:
  - Problem description
  - Test cases
  - Starter code
  - User query
  - Strict role-based instruction for AI

### 5. 🎥 Video Tutorial Section
- Upload and access video content
- Backend routes: `/video`

---

## 🗂️ Data Models

- `User` – Login/auth details
- `Problem` – Title, description, starter code, test cases
- `Submission` – User solutions
- `SolutionVideo` – Video metadata

---

## 📬 API Endpoints

| Route        | Description                     |
|--------------|---------------------------------|
| `/user`      | Authentication (Login/Signup)  |
| `/problem`   | Create/Fetch problems          |
| `/submission`| Handle code submissions        |
| `/ai`        | Gemini-powered doubt solving   |
| `/video`     | Video upload & access          |

---

## 🧪 Local Setup Instructions

### ✅ Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Redis](https://redis.io/download/)
- [Google AI Studio](https://aistudio.google.com/) (for Gemini API key)
- [Cloudinary](https://cloudinary.com/) account

---

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/git-sumitchaudhary/AlgoNest-AI-POWERED-CODING-PLATFORM.git
cd AlgoNest-AI-POWERED-CODING-PLATFORM
```

---

### 2. 🔧 Backend Setup

```bash
cd backend
npm install
```

📄 Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/algonest
JWT_SECRET=your_jwt_secret_key
GEMINI_KEY=your_google_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
REDIS_URL=redis://localhost:6379
```

▶️ Start backend server:

```bash
npm start
```

🟢 Runs at: `http://localhost:5000`

---

### 3. 🎨 Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

🟢 Runs at: `http://localhost:5173`

---

### 4. 🌐 Access the Platform

Once both servers are up:

🔗 Visit: `http://localhost:5173`

Start solving problems, interact with the AI, and boost your DSA skills 🚀

---

## 🙌 Contributing

Interested in contributing to AlgoNest? Feel free to open issues, suggest features, or submit pull requests!

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Links

- [Google Gemini](https://aistudio.google.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Cloudinary](https://cloudinary.com/)
