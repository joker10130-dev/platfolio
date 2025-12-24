import dotenv from "dotenv";
dotenv.config(); // Vercel handles envs, but this is safe to keep

import express from 'express';
import connectDB from '../config/db.js';
import usersRouter from "../routes/api/users.js"; // Note: path changed to ../
import authRouter from "../routes/api/auth.js";
import profileRouter from "../routes/api/profile.js";

const app = express();

// Connect Database
connectDB().catch(err => console.error("MongoDB Connection Error:", err));

app.use(express.json());

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const isLocal = process.env.NODE_ENV !== 'production';

if (isLocal) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`### Local Server running on http://localhost:${PORT}`);
  });
}

// IMPORTANT: Export the app for Vercel
export default app;