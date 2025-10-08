import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
    {
        "companyId": Number,
        "userId": Number,
        "totalScore": Number,
        "createdAt": { type: Date, default: Date.now }
    }
)

export const Leadboard = mongoose.model("Leaderboard", leaderboardSchema, "leaderboard");