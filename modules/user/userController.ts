import { Request, Response } from "express";
import User from "./UserModel";
import IUser from "./userInterface";

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User<IUser>({
            name: req.body.name,
            age: req.body.age,
            country: req.body.country,
            address: req.body.address,
            designation: req.body.designation
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (error) {
        res.status(500).json({
            status: "error",
        })
    }
}
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({
            status: "error",
        })
    }
}
