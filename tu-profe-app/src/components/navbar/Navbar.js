import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';

export const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const slide = isOpen ? "Navbar__menu open" : "Navbar__menu close";


    return (
        <header className="Navbar">
            <Link className="Navbar__brand" to="/">
                tu<span>Profe</span>
            </Link>

            <nav className={slide}>
                <Link to="/" className="Navbar__item">
                    Dar clases    
                </Link>

                <Link to="/" className="Navbar__item">
                    Registrarse   
                </Link>

                <Link to="/" className="Navbar__item">
                    Conectarse   
                </Link>
            </nav>

            {(screenWidth < 780) && (
                <div className="Navbar__hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            )}

        </header>
    )
}
