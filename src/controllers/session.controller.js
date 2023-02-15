import Board from '../models/board.model'
import { getUser } from './user.controller'
/*
Session starts
Create a new board
Assosiate the board with the user
API is ready for petitions
*/

export async function init(){
  const kanban = new Board({
    users: [
      getUser()
    ],
    columns: [
      {
        name: 'buffer',
        cards: []
      },
      {
        name: 'working',
        cards: []
      },
      {
        name: 'done',
        cards: []
      },
    ]
  })
  await kanban.save()
  console.log('Board created')
}