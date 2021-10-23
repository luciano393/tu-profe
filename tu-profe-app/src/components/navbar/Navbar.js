import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalWrapper } from '../modal/ModalWrapper';
import Hamburger from 'hamburger-react';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { getAuth, signOut } from '@firebase/auth';

export const Navbar = (props) => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const openLogin = () => {
        setLogin(!login)
    }

    const openRegister = () => {
        setRegister(!register)
    }
 

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

    

    const auth = getAuth();
    const user = auth.currentUser;


    const Logout = () => {
        signOut(auth).then(() => {
            setOpen(!isOpen)
        }).catch((error) => {
            console.log(error)
        })
    }


    const slide = isOpen ? "Navbar__menu open" : "Navbar__menu close";
    
    const colorNav = props.scroll > 200 ? "Navbar stiky" : "Navbar";

    return (
        <>
            <header className={colorNav}>
                <Link className="Navbar__brand" to="/">
                    tu<span>Profe</span>
                </Link>

                <nav className={slide}>

                    {(user) && (
                        <Link className="Navbar__item"
                        to="/"
                        onClick={Logout}>Cerrar sesion</Link>
                    )}
                    {(!user) && (
                        <>
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
                    )}
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
                    </div>}/>
                </ModalWrapper>
            )}

            {(register) && (
                <ModalWrapper closeModal={openRegister}>
                    <RegisterScreen btn={
                    <div className="btn-close">
                        <Hamburger toggled="isOpen"
                        toggle={openRegister}
                        />
                    </div>
                    }
                    close={openRegister}
                    />
                </ModalWrapper>
            )}
        </>
    )
}
