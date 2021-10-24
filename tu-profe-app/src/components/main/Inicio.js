import React, { useState } from 'react'
import { faSearch, faBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import image1 from '../../assets/images/image.jpg';
import image2 from '../../assets/images/pexels-max-fischer-5212339.jpg'
import image3 from '../../assets/images/pexels-august-de-richelieu-4260314.jpg'

import { useScreen } from '../../hooks/useScreen';
import { SearchScreen } from './SearchScreen';
import { useOpen } from '../../hooks/useOpen';

export const Inicio = (props) => {
    const screen = useScreen();
    const [open, changeOpen] = useOpen();


    return (
        <div className="Inicio">
            <div className="text-content">
                <h1>Encontrá tu profe ideal</h1>
                <div 
                className="input-box primary"
                onClick={changeOpen}
                >
                    <label><FontAwesomeIcon 
                    icon={faBook}
                    className="book"
                    />¿Qué te interesa aprender?</label>
                    <input 
                    type="text"
                    className="input"
                    />
                    <FontAwesomeIcon icon={faSearch}className="search"/>
                </div>
                <p>En línea o presencial, elegí entre <span>17 millones de profesores</span></p>
            </div>
            <div className="images-content">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
            </div>

            {(props.scroll > 200 & screen < 780) && (
                <div 
                className="input-box fixed"
                onClick={changeOpen}
                >
                    <label><FontAwesomeIcon 
                    icon={faBook}
                    className="book"
                    />¿Qué te interesa aprender?</label>
                    <input 
                    type="text"
                    className="input"
                    />
                    <FontAwesomeIcon icon={faSearch}className="search"/>
                </div>
            )}


            <SearchScreen open={open} changeOpen={changeOpen}/>
        </div>
    )
}
