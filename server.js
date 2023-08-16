import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import OrderRouters from "./Router/OrderRouter.js";
import FeedbackRouters from "./Router/FeedbackRouter.js";
import ProductRouters from "./Router/ProductRouter.js";
import LeadRouters from "./Router/LeadRouter.js";
import TaskRouters from "./Router/TaskRouter.js";
import MeetRouters from "./Router/MeetRouter.js";
import ContactRouters from "./Router/ContRouter.js";
import OppertunityRouters from "./Router/OppRouter.js";
import EmpRouters from "./Router/EmpRouter.js";
import CompanyRouters from "./Router/CompanyRouter.js";
import UserRouters from "./Router/UserRouter.js";
import NoteRouters from "./Router/NoteRouter.js";
import PayRouters from "./Router/PayRouter.js";
import ConvertRouters from "./Router/ConvertRouter.js";

const app = express();

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/lead/',LeadRouters)
app.use('/api/task/',TaskRouters)
app.use('/api/meet/',MeetRouters)
app.use('/api/contact/',ContactRouters)
app.use('/api/convert/',ConvertRouters)
app.use('/api/opp/',OppertunityRouters)
app.use('/api/emp/',EmpRouters)
app.use('/api/company/',CompanyRouters)
app.use('/api/user/',UserRouters)
app.use('/api/order/',OrderRouters)
app.use('/api/feedback/',FeedbackRouters)
app.use('/api/product/',ProductRouters)
app.use('/api/note/',NoteRouters)
app.use('/api/payment/',PayRouters)

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err.message)
})

const port=process.env.port || 5000;

app.listen(port,()=>{
    console.log('server is running on port http://localhost:${port}')
})
