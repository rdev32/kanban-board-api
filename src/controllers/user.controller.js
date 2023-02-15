import User from '../models/user.model'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const createUser = async (req, res) => {
  const { username, email, password } = req.body
  if (!(username && email && password)) 
    return res.status(400).json({ 'message': 'Username, email and password are required' });
  const newUser = new User({ username, email, password })
  try {
    await newUser.save()
    res.json({ 'message': 'User created' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const updateUser = async (req, res) => {
  const { username, email, password } = req.body
  if (!(username && email && password)) 
    return res.status(400).json({ 'message': 'Username, email and password are required' });
  try {
    await User.findByIdAndUpdate(req.params.id, { username, email, password })
    res.json({ 'message': 'User updated' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ 'message': 'User deleted' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}
