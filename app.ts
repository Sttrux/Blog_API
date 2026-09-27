import "dotenv/config";
import express from "express";
import indexRouter from "./src/routes/index.routes";
import cors from "cors"


const app = express();

app.use(cors());






//middleware for json
app.use(express.json());

//routes
app.use("/", indexRouter);

//listening port
app.listen(process.env.PORT,()=>{
    console.log(`App running on PORT ${process.env.PORT}`)
})