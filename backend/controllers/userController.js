const userModel = require('../models/userModel');


const createUser = async (req, res) => {
    try {
        const user = await userModel.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: 'Failed to create user'});
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({error: 'Failed to fetch users'});
    }
};


const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: 'User not found'});
        }
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch user'});
    }
};


const updateUser = async (req, res) => {
    const {id} = req.params;
    try {
        const updateUser = await userModel.updateUser(id, req.body);
        if (updateUser) {
            res.status(200).json(updateUser);
        } else {
            res.status(404).json({error: "User not found"});
        }
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
};


const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        const deleteUser = await userModel.deleteUser(id);
        if (deleteUser) {
            res.status(200).json(deleteUser);
        } else {
            res.status(404).json({error: "User not found"});
        }
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}