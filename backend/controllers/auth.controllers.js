import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";



export const login = async (req, res) => {
    const { userId, hashedPassword } = req.body;
    try {

        //json req check
        if (!userId || !hashedPassword) {
            throw new Error("All fields are required")
        }

        //auth check
        const user = await User.findOne({ userId });
        if(!user){
            return res.status(400).json({success:false, message : "User doesn't exist"});
        }
        const actualHashedPassword = user.password;
        if (actualHashedPassword != hashedPassword) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        //now user is authenticated
        generateTokenAndSetCookie(res, user._id);
        await user.save();

        //check type of user
        if (!user) {
            throw new Error("User not found");
        }
        const userType = user.userType;

        //if usertype is 2(employee), UserProgress se sab data uthana hai uske userid ke corresponding
        if (userType === 2) {

            // send json response
            res.status(200).json({
                success: true,
                message: "Logged in successfully",
                user: user,
            });
        }



    }
    catch (error) {
        console.log(error.message);
    }

}

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "logged out successfully" });
}
