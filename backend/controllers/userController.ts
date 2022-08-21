import { Response, Request } from 'express';
const asyncHandler = require('express-async-handler');
import { createUser, getUserById, getUsers, deleteUser, updateUser, loginUser } from '../services/userService';



//@desc Get all users
//@route GET /api/users
//@access Public
const getUsersHandler = asyncHandler(async (req: Request, res: Response) => {
    const users = await getUsers()
   
    res.status(200).json(users);
});

//@desc Create a new user
//@route POST /api/users
//@access Private
const createUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdUser = await createUser(req.body)
    res.status(201).json(createdUser);
});

//@desc login a user
//@route POST /api/User/login
//@access Public
const loginUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await loginUser(req.body.email, req.body.password)
    res.status(201).json(user);
});





//@desc Get a user by id
//@route GET /api/users/:id
//@access Public
const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await getUserById(req.params.id)
    res.status(200).json(user);
});

//@desc Delete a user by id
//@route DELETE /api/users/:id
//@access Private
const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteUser(req.params.id)
    
    res.status(200).json({
        message: `User ${req.params.id} deleted`,
    });
});

//@desc Update a user by id
//@route PUT /api/users/:id
//@access Private
const updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body)
    res.json(user);
});

module.exports = {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
};