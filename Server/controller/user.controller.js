import UserModel from "../model/userSchema.model.js";

export const addUser = async (req, res) => {
    const user = req.body;
    const validUser = new UserModel(user);

    try {
        const result = await validUser.save();
        res.json({ data: result, msg: "created successfully" })
    } catch (error) {
        res.json({ error: error, msg: "unable to created" })
    }
}

export const allUser = async (req, res) => {
    try {
        const result = await UserModel.find();
        res.json(result);
    } catch (error) {
        res.json({ error: error, msg: "unable to fetch" })
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    try {
        const updatedUser = await UserModel.updateOne({ _id: id }, newUser);
        res.json({ msg: "userUpdated successfully" });
    } catch (error) {
        res.json({ error: error, msg: "unable to update" })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await UserModel.deleteOne({ _id: id });
        res.json({ msg: "deleted successfully" });
    } catch (error) {
        res.json({ error: error, msg: "unable to delete" })
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await UserModel.findOne({ _id: id });
        res.json(result);
    } catch (error) {
        res.json({ error: error, msg: "unable to delete" })
    }
}