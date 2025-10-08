import { User } from "../models/user.model.js";

export const displayLeaderboard = async (req, res) => {
    try {
        const { companyId, timeline } = req.body;

        if (!companyId || !timeline) {
            return res.status(400).json({ message: "Missing required parameters" });
        }

        let startDate;
        const endDate = new Date();

        if (timeline == 1) { // Weekly
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);
        } else if (timeline == 2) { // Monthly
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 1);
        } else if (timeline == 3) { // All-time
            startDate = new Date(0);
        } else {
            return res.status(400).json({ message: "Invalid timeline value" });
        }

       
        const leaderboard = await User.find({
            companyId,
            userType: 2,
            updatedAt: { $gte: startDate, $lte: endDate }
        })
            .sort({ totalScore: -1 })
            .limit(10);

        return res.status(200).json({ leaderboard });
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateLeaderboard = async (req, res) => {
    const { companyId, userId, totalScore } = req.body;
    try {
        const result = await User.updateOne(
            { companyId, userId },
            {
                $set: {
                    totalScore,
                    updatedAt: new Date() 
                }
            }
        );

        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating leaderboard:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
