import './styles/app.css'
import { FaShare, FaTrash } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [newPlayer, setNewPlayer] = useState('')

  function addPlayerCard() {
    console.log(newPlayer)
  }

  return (
    <div className="App">
      <h1>Quem vai beber?</h1>

      <div className="input-space">
        <input type="text"
          placeholder='Adicione um cachaceiro...'
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)} />
        <button onClick={addPlayerCard}><FaShare /></button>
      </div>

      <div className='jogador-card'>
        <div className='jogador'>
          <p>{newPlayer}</p>
          <button> <FaTrash /></button>
        </div>
      </div>

    </div>
  )
}

export default App
