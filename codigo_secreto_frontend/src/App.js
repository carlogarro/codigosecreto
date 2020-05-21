//medium.com/@shifrb/how-to-build-tic-tac-toe-with-react-hooks-ca37f6040022

import React from 'react'
import './App.css'
import roomService from './services/rooms'
import { Switch, Route, useHistory } from 'react-router-dom'
import Room from './components/room'

const Home = () => {
  const history = useHistory()

  const NewRoom = async () => {
    console.log('button pressed to create room')
    const createdRoom = await roomService.create()
    console.log(createdRoom.data.id)
    history.push(`/rooms/${createdRoom.data.id}`)
  }

  return (
    <div>
      <div>
        {' '}
        <h2>CODIGO SECRETO ONLINE</h2>{' '}
      </div>
      <div>
        <div>
          <button onClick={() => NewRoom()}>NEW ROOM</button>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/rooms/:id">
          <Room />
        </Route>
        <Route path="/">
          {' '}
          <Home />{' '}
        </Route>
      </Switch>
    </div>
  )
}

export default App
