import Posit from '../models/posit.model'

export const getPosits = async (req, res) => {
  try {
    const posits = await Posit.find()
    res.json(posits)
  } catch (error) {
    res.sendStatus(500)
  }
}

export const getPosit = async (req, res) => {
  try {
    const posit = await Posit.findById(req.params.id)
    res.json(posit)
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const createPosit = async (req, res) => {
  const { name, description } = req.body
  if (!(name && description)) 
    return res.status(400).json({ 'message': 'Name and description are required' });
  const newPosit = new Posit({ name, description })
  try {
    await newPosit.save()
    res.json({ 'message': 'Posit saved' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const updatePosit = async (req, res) => {
  const { name, description } = req.body
  if (!(name && description)) 
    return res.status(400).json({ 'message': 'Name and description are required' });
  const updatedPosit = { name, description }
  try {
    await Posit.findByIdAndUpdate(req.params.id, updatedPosit)
    res.json({ 'message': 'Posit updated' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const deletePosit = async (req, res) => {
  try {
    await Posit.findByIdAndDelete(req.params.id)
    res.json({ 'message': 'Posit deleted' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}