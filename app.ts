import express, { Application } from "express";
const cors = require("cors");
const app: Application = express();

// Application routes
import userRoutes from "./modules/user/userRoutes"

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;