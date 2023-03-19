import React from 'react'
import { useState } from 'react'

export const Modal = (props) => {

    const [modal, setModal] = useState(true)
  return (
    <div className={`modal__wrapper${props.isOpen ? ' open' : ' close'}`}
         style={{...props.style}} >
        <div className='modal__dialog'>
            <div className='modal__close' onClick={props.isClose}>✕</div>
            <h2>{props.title}</h2>
            {props.children}

        </div>
        
    </div>
  )
}

