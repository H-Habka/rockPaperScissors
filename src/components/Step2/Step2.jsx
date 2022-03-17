import React from 'react'
import './Step2.scss'
import Circle from '../circle/Circle'
import LoseOrWin from '../LoseOrWin/LoseOrWin'
import { useMediaQuery } from 'react-responsive'

const Step2 = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  return (
    <>
      <div className='Step2-container'>
        <div className="circle congrats"><Circle/></div>
        {
          isDesktop ? <LoseOrWin /> : ''
        }
        <div className="circle"></div>
      </div>
      {
        !isDesktop ? <LoseOrWin /> : ''
      }
    </>
  )
}

export default Step2