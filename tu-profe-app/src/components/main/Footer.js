import React from 'react'

export const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer__container">
                <div className="list">
                    <div className="flex">
                        <div>
                            <h4>Acerca de nosotros</h4>
                            <li>¿Quiénes somos?</li>
                            <li>Nuestros valores</li>
                            <li>Menciones legales</li>
                        </div>
                        <div>
                            <li>Política de Privacidad</li>
                            <li>Superprof en el mundo</li>
                            <li>Materias</li>
                            <li>Clases virtuales</li>
                            <li>Provincias</li>
                            <li>Superprof recluta</li>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4>Seguí la aventura</h4>
                        <li>¿Necesitás ayuda?</li>
                    </div>
                    <div>
                        <h4>Asistencia</h4>
                        <li>Contacto</li>
                    </div>
                    <hr />
                </div>
                <span className="copy">© tuProfe. Explorá, aprendé.</span>
            </div>
        </footer>
    )
}
