import React from 'react'
import './LoseOrWin.scss'

const LoseOrWin = ({setMyChoice,winner}) => {
  return (
    <div className='LoseOrWin-section'>
        {
          winner !== 'nobodyWin' ? <h1 className='LoseOrWin-title'>YOU {winner==='me'? 'WIN' : 'LOSE' }</h1> : <h1 className='LoseOrWin-title'>EQUALIZE</h1>
        }
        <button className='LoseOrWin-button'
                onClick={()=>setMyChoice('')}
                >PLAY AGAIN</button>
    </div>
  )
}

export default LoseOrWin