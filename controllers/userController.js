import User from "../models/userModel.js"
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js'



const register = async (req, res, next) => {

  const {name, email, password} = req.body

  if(!name, !email, !password) {
    throw new BadRequestError('Please provide all values')
  }

  const userr = await User.create(req.body);
  res.status(StatusCodes.CREATED).json(userr);
  console.log(userr);

}

const login = async (req, res) => {

  try {
    
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      res.send("User not found")
    } else {
      res.json(user)
    }
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  res.send('Update user')
}

export { register, login, updateUser }