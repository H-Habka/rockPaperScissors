import React, { useEffect, useState } from 'react'
import './MainBody.scss'
import logo from '../../assets/images/logo.svg'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import { Routes, Route } from 'react-router-dom'
import RulesButtonWithPopup from '../rules-button-with-popup/RulesButtonWithPopup'

const MainBody = () => {
  const [myChoice, setMyChoice] = useState('')
  const [score, SetScore] = useState(localStorage.getItem("score"))

  const changeTheScore= (winner) =>{
    if(winner === 'me'){
      localStorage.setItem("score",score+1)
      SetScore(score+1)
    }else if(winner === 'computer'){
      SetScore(score-1)
      localStorage.setItem("score",score-1)
    }
  }

  const handleChoice = (type) => {
    setMyChoice(type)
  }

  useEffect(() => {
    console.log(myChoice)
  }, [myChoice])

  return (
    <div className='step1-container'>
      <div className="step1-header">
        <img src={logo} className='logo-svg' />
        <div className="score-container">
          <div className="score-title">SCORE</div>
          <div className="score-value">{score ? score : 0}</div>
        </div>
      </div>


      {
        !myChoice ? (

          <Step1 handleChois={handleChoice} />
        ) : (
          <Step2 myChoice={myChoice} setMyChoice={setMyChoice} changeTheScore={changeTheScore}/>
        )
      }


      <RulesButtonWithPopup />

    </div>
  )
}

export default MainBody