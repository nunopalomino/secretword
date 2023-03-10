import './GameOver.css'

const GameOver = ({ retry }) => {
  return (
    <div className='gameOver'>
      <h1>Play again?</h1>
      <button onClick={retry}>Restart Game</button>
    </div>
  )
}

export default GameOver