import express from 'express';
import expressAsyncHandler from 'express-async-handler'; //express-async-handler reroutes errors to the error handler and catches the exceptions. Thus, it prevents loading from happening when an error is triggered.
import {usersDb} from '../data.mjs';
import User from '../models/userModel.js';

const userRouter = express.Router(); //userRouter conveniently handles diff app.get calls, esp in this case for a specific path

//handles calls to /api/users/seed
userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    
    const createdUsers = await User.insertMany(usersDb);
    res.send({ createdUsers });
  })
);

export default userRouter;