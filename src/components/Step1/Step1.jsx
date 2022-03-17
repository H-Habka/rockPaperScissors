import React from 'react'
import './Step1.scss'
import triangle from '../../assets/images/bg-triangle.svg'
import Circle from '../circle/Circle'

const Step1 = ({handleChois}) => {
    return (
        <div className="Step1-container">
            <div className="paper" onClick={() => handleChois('paper')}><Circle type='paper' /></div>
            <div className="scissors" onClick={() => handleChois('scissors')}><Circle type='scissors' /></div>
            <div className="rock" onClick={() => handleChois('rock')}><Circle type='rock' /></div>
            <img src={triangle} className='triangle-svg' />
        </div>
    )
}

export default Step1