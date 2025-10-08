import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import quizRoutes from "./routes/quiz.route.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js"
import { config } from "dotenv";



config();
const app = express();
const port = 5000;


const server = createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/quiz",quizRoutes);
app.use("/api/leaderboard",leaderboardRoutes)

server.listen(port, () => {
    connectDB();
    console.log(`Server running on port ${port}`);
});
