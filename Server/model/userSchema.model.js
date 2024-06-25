import mongoose from "mongoose";


const userSchemas = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, tech: {
        type: String,
        require: true
    }, salary: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
});

const UserModel = mongoose.model("userDetails", userSchemas);

export default UserModel