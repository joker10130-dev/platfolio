Platfolio - Full Stack MERN Project
A professional portfolio platform built with the MERN stack (MongoDB, Express, React, and Node.js). This project uses Vite for the frontend and is optimized for deployment on Vercel.

(This project is Serverless in Vercel, so it takes a delay when opening the deployed web for the first time)

#The Vercel portfolio page takes around 3 seconds to load the list of profiles
[https://platfolio.vercel.app/](https://platfolio.vercel.app/)

🚀 Getting Started
Follow these steps to get the project running on your local machine.

#Prerequisites
Node.js: Version 24.x or higher

npm: Version 9.x or higher

MongoDB: A local instance or a MongoDB Atlas account.

🛠️ Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/joker10130-dev/platfolio.git
cd platfolio
```
2. Install Dependencies
You need to install dependencies for both the root (backend) and the frontend folder.


Install backend dependencies
```bash
npm install
```

Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```
3. Environment Variables
Create a .env file in the root directory and add your credentials:

Code snippet
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```
💻 Running Locally
To run the project locally, you need to start the backend and the frontend in two separate terminals.

Terminal 1: Backend (Express)
From the root directory:

```bash
npm run dev
```

Your server should start on http://localhost:5000

Terminal 2: Frontend (Vite + React)
From the frontend directory:

```bash
npm run dev
```
Your frontend should start on http://localhost:5173

Note: The frontend is configured via vite.config.js to proxy /api requests to the backend automatically.

📦 Deployment to Vercel
This project is configured as a Vercel Monorepo.

Push your code to GitHub.

Connect to Vercel: Import the project from your dashboard.

Project Settings:

Framework Preset: Vite

Root Directory: ./

Build Command: npm run build

Output Directory: frontend/dist

Environment Variables: Add your MONGO_URI and JWT_SECRET in the Vercel Settings tab.

📂 Project Structure
```plain
├── api/             # Express server logic (Vercel Serverless Functions)
├── config/          # Database configuration
├── routes/          # API Route definitions
├── frontend/        # Vite + React Application
│   ├── src/         # React components & logic
│   ├── vite.config.js
│   └── ...
├── vercel.json      # Routing configuration for Vercel
└── package.json     # Root scripts and dependencies
```
