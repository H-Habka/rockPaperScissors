import React from 'react'
import './Circle.scss'
import iconPaper from '../../assets/images/icon-paper.svg'
import iconScissors from '../../assets/images/icon-scissors.svg'
import iconRock from '../../assets/images/icon-rock.svg'

const Circle = ({ type }) => {
    let customStyle
    if(type === 'paper'){
        customStyle = {background: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'}
    }else if(type === 'scissors'){
        customStyle = {background: 'linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))'}
    }else{
        customStyle = {background: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'}
    }
    return (
        <div className="div-to-make-border" style={customStyle}>
            <div className="image-icon-container">
                <img
                    src={type === 'paper' ? iconPaper : (type == 'scissors') ? iconScissors : iconRock}
                    className='cicle' />
            </div>
        </div>
    )
}

export default Circle