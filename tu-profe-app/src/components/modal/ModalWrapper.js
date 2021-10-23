import React from 'react'

export const ModalWrapper = (props) => {

    return (
        <div className="Modal" onClick={props.closeModal}>
            {props.children}
        </div>
    )
}
