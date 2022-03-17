import React from 'react'
import './Rules.scss'
import rulesImage from '../../assets/images/image-rules.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import { useMediaQuery } from 'react-responsive'
const Rules = ({hidePopup}) => {

    const  toggleRulesView = useMediaQuery({
        query: '(min-width: 450px)'
    })

  return (
      <div className="rules-container">
          <h1 className="rules-title">RULES 
          {
              toggleRulesView ? <img className='close-icon' src={closeIcon} onClick={hidePopup}/> : ''
          }
          </h1>
          <img src={rulesImage}/>
          {
              !toggleRulesView ? <img className='close-icon' src={closeIcon} onClick={hidePopup}/> : ''
          }
      </div>
  )
}

export default Rules