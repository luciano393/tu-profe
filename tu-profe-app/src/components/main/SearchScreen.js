import React from 'react';
import { faBook, faArrowLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { obtenerClasesAccion } from '../../redux/clasesDucks';
import { Link } from 'react-router-dom';

export const SearchScreen = ({open, changeOpen}) => {
    const dispatch = useDispatch()
    const slide = open ? "busqueda open" : "busqueda close";

    const search = () => {
        dispatch(obtenerClasesAccion())
    }


    return (
        <div className={slide}>
            <div className="heading">
                <FontAwesomeIcon 
                icon={faArrowLeft}className="arrow"
                onClick={changeOpen}
                />
                <Link
                to="/results" 
                onClick={search}>Buscar</Link>
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
