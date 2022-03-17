import React from 'react'
import './MainBody.scss'
import logo from '../../assets/images/logo.svg'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import { Routes, Route } from 'react-router-dom'

const MainBody = () => {
  return (
    <div className='step1-container'>
        <div className="step1-header">
            <img src={logo} className='logo-svg'/>
            <div className="score-container">
                <div className="score-title">SCORE</div>
                <div className="score-value">12</div>
            </div>
        </div>
        
        <Routes>
            <Route path="/" element={<Step1 />}/>
            <Route path="/step2" element={<Step2 />}/>
        </Routes>

        <div className="button-container">
            <button className='rules-button'>RULES</button>
        </div>
    </div>
  )
}

export default MainBody