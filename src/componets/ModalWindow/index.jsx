import React, { useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import s from './index.module.css'
import { Context } from '../../context'
import { useDispatch } from 'react-redux'

export default function ModalWindow() {

    

    const {closeModalWindow, modalActive} = useContext(Context);

    const modalStyles = {
        display: modalActive ? 'flex' : 'none'
    }

  return (
    <div className={s.modal} style={modalStyles}>
        <div>
            <RxCross1 onClick={closeModalWindow}  />
            <p>Congradukations!</p>
            <p>Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Деревни реторический рыбного строчка своего живет встретил все продолжил. Взгляд рукописи, ее вопрос рыбными свое знаках меня однажды повстречался над.</p>
        </div>
    </div>
  )
}
