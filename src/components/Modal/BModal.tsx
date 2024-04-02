import { useState } from 'react'
import Modal from './Modal'
import './modal.scss'

export default function BModal() {
    let [modal, setModal] = useState(false)
    let toggleModal = () => setModal(!modal) 

    return (
        <div>
            <button className='cross' onClick={toggleModal}>+</button>
            {modal && <Modal hype={toggleModal} />}
        </div>
    )
}