import React, { useEffect, useState } from 'react'
import './Step2.scss'
import Circle from '../circle/Circle'
import LoseOrWin from '../LoseOrWin/LoseOrWin'
import { useMediaQuery } from 'react-responsive'

const Step2 = ({ myChoice, setMyChoice, changeTheScore }) => {
  const [computerChoice, setComputerChoice] = useState('')
  const [winner, setWinner] = useState('')

  const checkTheWinner = (myChoice, computerChoice) => {
    console.log('myChoice is : ', myChoice)
    console.log('computerChoice is :', computerChoice)
    if (myChoice === 'paper' && computerChoice === 'scissors') return 'computer'
    if (myChoice === 'paper' && computerChoice === 'rock') return 'me'
    if (myChoice === 'rock' && computerChoice === 'paper') return 'computer'
    if (myChoice === 'rock' && computerChoice === 'scissors') return 'me'
    if (myChoice === 'scissors' && computerChoice === 'rock') return 'computer'
    if (myChoice === 'scissors' && computerChoice === 'paper') return 'me'
    return 'nobodyWin'
  }
  const choices = ['paper', 'scissors', 'rock']
  useEffect(()=>{
    let makeAchoice = Math.floor(3 * Math.random())
    setTimeout(()=>setComputerChoice(choices[makeAchoice]),1000)

  },[])

  useEffect(() => {
    if (computerChoice) {
      setTimeout(() => setWinner(checkTheWinner(myChoice, computerChoice)), 1000)
    }
  }, [computerChoice])

  useEffect(() => {
    if (winner) {
      changeTheScore(winner)
    }
  }, [winner])



  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })


  return (
    <>
      <div className='Step2-container'>
        <div className={`circle ${winner === 'me'? 'congrats' : ''}`}><Circle type={myChoice} /></div>
        {
          isDesktop && winner ? <LoseOrWin setMyChoice={setMyChoice} winner={winner} /> : ''
        }
        <div className={`circle ${winner === 'computer'? 'congrats' : ''}`}>
          {
            computerChoice ? (<Circle type={computerChoice} />) : ('')
          }
        </div>
      </div>
      {
        !isDesktop && winner ? <LoseOrWin setMyChoice={setMyChoice} winner={winner} /> : ''
      }
    </>
  )
}

export default Step2