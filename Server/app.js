import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { connection } from "./db.js";
import userRoute from "./routes/User.route.js";
const app = express();

connection();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/",userRoute)

app.listen(8000,()=>{
    console.log("server Run");
})