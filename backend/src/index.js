let express = require("express")
let app = express();
let cookieParser = require("cookie-parser")
require('dotenv').config()
let redisclient = require("./config/redisdatabase")
let user_routes = require("./routes/user_routes")
let problem_routes=require("./routes/problem_routes")
let code_routes=require("./routes/submit_routes")
let Main = require("./config/database")
const cors=require("cors")
const admin = require('firebase-admin');
const assist_routes=require("./routes/assistant")
const payment_router=require("./routes/payment")
const cron = require('node-cron');
const problem=require("./models/problem_schema")
const videoRouter = require("./routes/videoCreator");
const discussion_router =require("./routes/discusion")
const constest_router=require("./routes/contest")
const path=require("path");

const serviceAccount=JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
app.use(express.json());
app.use(cookieParser());


const _dirname=path.resolve();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//admin.initializeApp();
const pairmode_routes=require("./routes/pairMode");


app.use(cors({
    origin: ["http://localhost:5173"],
    credentials:true
}))



app.use("/user", user_routes);
app.use("/problem",problem_routes)
app.use("/code",code_routes) 
app.use("/ai",assist_routes)
app.use("/pay",payment_router)
app.use("/video", videoRouter);
app.use("/discussion",discussion_router)
app.use("/contest",constest_router)
app.use("/pairMode",pairmode_routes)

cron.schedule('0 0 * * *', async () => {

    try {
       
        await problem.findOneAndUpdate(
            { isProblemOfTheDay: true },
            { $set: { isProblemOfTheDay: false } }
        );

        const potentialProblemsCount = await problem.countDocuments({ potdDate: "null" });
        
        if (potentialProblemsCount === 0) {
         
            
            await problem.updateMany({}, { $set: { potdDate: "null" } });
            return;
        }

        const randomIndex = Math.floor(Math.random() * potentialProblemsCount);
        const newPotd = await problem.findOne({ potdDate: "null" }).skip(randomIndex);

        if (newPotd) {
            newPotd.isProblemOfTheDay = true;
            newPotd.potdDate = new Date();
            await newPotd.save();
          ;
        }
    } catch (error) {
        console.error('Error in POTD daily task:', error);
    }
}, {
    scheduled: true,
    timezone: "Asia/Kolkata" 
});


app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('/*splat',(_,res)=>{
   res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
});


async function connections() {
    try {
        await Promise.all([redisclient.connect(), Main()])
    
        app.listen(process.env.PORT, () => {
            console.log("server is start listening at port number" + process.env.PORT);
        })
    } 
    catch (err) {
        console.log("Error: " + err);
    }
}

connections()
