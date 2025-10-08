import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userId: Number,
        email: String,
        password: String,
        userType: Number,  // 1 = Admin, 2 = Employee
        companyId: Number,
        name: String,
        totalScore: {
            type: Number,
            default: 0
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }
);

// Collection name is "users"
export const User = mongoose.model("User", userSchema);
