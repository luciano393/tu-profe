import React from 'react'
import image from '../../assets/images/imagen3.jpg'
import { useScreen } from '../../hooks/useScreen';

export const Section = () => {
    const screenWidth = useScreen()

    return (
        <div className="Section">
            {screenWidth > 780 ? 
                <>
                    <div className="screendesktop">
                        <div className="img-content">
                            <img src={image} alt="" />
                            </div>
                            <div className="text-content">
                            <h2>Alumno y profesor, la combinación perfecta</h2>
                            <p>"tuProfe es la página que permite a mis hijos desarrollarse, de involucrarse realmente y tener más confianza"</p>
                            <div className="column">
                                <span>Mamá de Pepito</span>
                                <span>Alumno de 1er grado</span>
                            </div>
                        </div>
                    </div>
                </>
                : screenWidth < 780 ?
                <>
                    <div className="screenmobile">
                        <h2>Alumno y profesor, la combinación perfecta</h2>
                        <img src={image} alt="" />
                        <p>"tuProfe es la página que permite a mis hijos desarrollarse, de involucrarse realmente y tener más   confianza"</p>
                        <div className="column">
                            <span>Mamá de Pepito</span>
                            <span>Alumno de 1er grado</span>
                        </div>
                    </div>
                </> : null
            } 
        </div>
    )
}
