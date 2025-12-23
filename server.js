import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import path from 'path';
import usersRouter from "./routes/api/users.js";
import authRouter from "./routes/api/auth.js";
import profileRouter from "./routes/api/profile.js";

const app = express();

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing from environment variables");
}

connectDB();

app.use(express.json({ extends: false }));

// Define Routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
