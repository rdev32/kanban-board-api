import User from '../models/user.model'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
  const { username, email, password } = req.body
  if (!(username && email && password)) 
    return res.status(400).json({ 'message': 'Username, email and password are required' });
  const newUser = new User({ username, email, password })
  try {
    await newUser.save()
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: 86400
    })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const signIn = async (req, res) => {
  // TODO: Implement
  
}