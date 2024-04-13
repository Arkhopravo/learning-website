import {app} from "./app"
import connectDB from "./utils/db";
require("dotenv").config();




// Create our server
app.listen(process.env.PORT, () =>{
    console.log(`Server is connected to ${process.env.PORT}`);
    connectDB();
});