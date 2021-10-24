import React from 'react';
import { faBook, faArrowLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchScreen = ({open, changeOpen}) => {

    const slide = open ? "busqueda open" : "busqueda close";

    return (
        <div className={slide}>
            <div className="heading">
                <FontAwesomeIcon 
                icon={faArrowLeft}className="arrow"
                onClick={changeOpen}
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
    )
}
