import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../navbar/Navbar'

export const Results = () => {
    const state = useSelector( store => store.clase.array);

    console.log(state);

    return (
        <div className="Results">
            <Navbar />
            <section>
                {state.map(item => (
                    <>
                        <div className="card">
                            <h1>{item.titulo}</h1>
                            <p>{item.descripcion}</p>
                            <div className="column">
                                <span>{item.forma}</span>
                                <span>{item.precio}</span>
                                <span>{item.materias}</span>
                            </div>
                        </div>
                    </>
                ))}
            </section>
        </div>
    )
}
