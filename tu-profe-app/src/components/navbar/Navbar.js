import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalWrapper } from '../modal/ModalWrapper';
import Hamburger from 'hamburger-react';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { getAuth } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { useScreen } from '../../hooks/useScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import { SearchScreen } from '../main/SearchScreen';
import { useOpen } from '../../hooks/useOpen';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = (props) => {
    const screenWidth  = useScreen();
    const [open, changeOpen] = useOpen();
    const [openLogin, login, openRegister, register] = useAuth();


    const [isOpen, setOpen] = useState(false);  

    const auth = getAuth();
    const user = auth.currentUser;

    const dispatch = useDispatch()


    const Logout = () => {
        dispatch(startLogout())
    }

    const slide = isOpen ? "Navbar__menu open" : "Navbar__menu close";
    
    const colorNav = props.scroll > 200 ? "Navbar stiky" : "Navbar";

    return (
        <>
            <header className={colorNav}>
                <Link className="Navbar__brand" to="/">
                    tu<span>Profe</span>
                </Link>

                {props.scroll > 200 & screenWidth > 780 ? 
                    <div 
                    className="Navbar__search input-box"
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
                    : null
                }

                <nav className={slide}>

                    {user
                        ? <Link className="Navbar__item" to="/" onClick={Logout}>Cerrar sesion</Link>
                        : <>
                            <Link to="/" className="Navbar__item"
                            onClick={openRegister}
                            >
                            Registrarse   
                            </Link>

                            <Link to="/" className="Navbar__item"
                            onClick={openLogin}
                            >
                            Conectarse   
                            </Link>
                          </>
                    }
                </nav>

                {(screenWidth < 780) && (
                    <div className="Navbar__hamburger">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                )}

            </header>
            {(login) && (
                <ModalWrapper closeModal={openLogin}>
                    <LoginScreen 
                    close={openLogin}
                    btn={<div className="btn-close">
                        <Hamburger toggled="isOpen"
                        toggle={openLogin}
                        />
                    </div>}
                    />
                </ModalWrapper>
            )}

            {(register) && (
                <ModalWrapper closeModal={openRegister}>
                    <RegisterScreen 
                    close={openRegister}
                    btn={
                    <div className="btn-close">
                        <Hamburger toggled="isOpen"
                        toggle={openRegister}
                        />
                    </div>
                    }

                    />
                </ModalWrapper>
            )}

            <SearchScreen open={open} changeOpen={changeOpen}/>
        </>
    )
}
