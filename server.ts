import express, { Application } from "express"
import cors from "cors";
const mongoose = require("mongoose");
const app: Application = express();
const PORT: number = 5000


app.use(cors())
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
        console.log(`🛢 Database connection successful`);

        app.listen(PORT, () => {
            console.log(`Server is  listening on PORT ${PORT}`);
        });
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}

bootstrap();
