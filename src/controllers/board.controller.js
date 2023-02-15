import Board from '../models/board.model.js'

export const getBoard = async (req, res) => {
  try {
    const board = await Board.find()
    res.json(board)
  } catch (error) {
    res.sendStatus(500)
  }
}

export const createBoard = async (req, res) => {
  const { columns } = req.body
  const newBoard = new Board({ columns })
  try {
    await newBoard.save()
    res.json({ 'message': 'Board created' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const updateBoard = async (req, res) => {
  try {
    const { columns } = req.body
    await Board.findByIdAndUpdate(req.params.id, { columns })
    res.json({ 'message': 'Board updated' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

export const deleteBoard = async (req, res) => {
  try {
    await Board.findByIdAndDelete(req.params.id)
    res.json({ 'message': 'Board deleted' })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}
