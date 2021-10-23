import React, { useEffect, useState } from 'react'
import { faSearch, faBook, faArrowLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import image1 from '../../assets/images/image.jpg';
import image2 from '../../assets/images/pexels-max-fischer-5212339.jpg'
import image3 from '../../assets/images/pexels-august-de-richelieu-4260314.jpg'

export const Inicio = (props) => {
    const [isOpen, setOpen] = useState(false)

    const searchOpen = () => {
        setOpen(!isOpen);
    }

    const slide = isOpen ? "busqueda open" : "busqueda close";


    return (
        <div className="Inicio">
            <div className="text-content">
                <h1>Encontrá tu profe ideal</h1>
                <div 
                className="input-box primary"
                onClick={searchOpen}
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

            {(props.scroll > 200) && (
                <div 
                className="input-box fixed"
                onClick={searchOpen}
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


            <div className={slide}>
                <div className="heading">
                    <FontAwesomeIcon 
                    icon={faArrowLeft}className="arrow"
                    onClick={searchOpen}
                    />
                    <span>Buscar</span>
                </div>
                <div className="input-search">
                    <FontAwesomeIcon 
                    icon={faBook}
                    className="book"
                    />
                    <input 
                    placeholder="¿Qué materia?"
                    />
                </div>
                <div className="input-search">  
                    <FontAwesomeIcon icon={faMapMarkedAlt}className="book"/>
                    <input 
                    placeholder="¿Dirección, ciudad o barrio?"
                    />
                </div>
            </div>
        </div>
    )
}
