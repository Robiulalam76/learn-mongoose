import mongoose from "mongoose";
import IUser from "./userInterface";

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }

},
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema);
export default User