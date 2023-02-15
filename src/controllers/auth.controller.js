import { getUser, createUser } from './user.controller'

export async function register(req, res) {
  const { username, email, password } = req.body
  const user = await getUser({ username, email })
  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }
  const newUser = await createUser({ username, email, password })
  res.json(newUser)
}

export async function login(req, res) {
  const { username, password } = req.body
  const user = await getUser({ username })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }
  const isMatch = await user.matchPassword(password)
  if (!isMatch) {
    return res.status(400).json({ message: 'Incorrect password' })
  }
  res.json(user)
}
