import React from 'react'
import './Rules.scss'
import rulesImage from '../../assets/images/image-rules.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import { useMediaQuery } from 'react-responsive'
const Rules = () => {

    const  toggleRulesView = useMediaQuery({
        query: '(min-width: 768px)'
    })

  return (
      <div className="rules-container">
          <h1 className="rules-title">RULES 
          {
              toggleRulesView ? <img src={closeIcon}/> : ''
          }
          </h1>
          <img src={rulesImage}/>
          {
              !toggleRulesView ? <img src={closeIcon}/> : ''
          }
      </div>
  )
}

export default Rules