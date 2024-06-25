import mongoose from "mongoose";
// 8E62gNwkmpnJNEvM
export const connection = async () => {
    let URL = "mongodb+srv://devendravishvakarma128:ZIHncuLzwJLjeCoD@cluster0.gyo2nez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(URL)
        console.log("Database connected");
    } catch (error) {
        console.log("unable to  connected");
    }
}