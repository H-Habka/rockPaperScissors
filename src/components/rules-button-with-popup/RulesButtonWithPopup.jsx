import React, { useState } from 'react'
import './RulesButtonWithPopup.scss'
import Rules from '../Rules/Rules'

const RulesButtonWithPopup = () => {
    const [popupState,setPopupState] = useState(false)
    const hidePopup = () =>{
        setPopupState(false)
    }
    return (
        <>
            <div className="rules-button-container">
                <button className='rules-button' onClick={() => {setPopupState(true)}}>RULES</button>
            </div>
            {
                popupState ? <Rules hidePopup = {hidePopup} /> : ''
            }
            
        </>
    )
}

export default RulesButtonWithPopup