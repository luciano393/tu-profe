import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



export const RegisterScreen = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const auth = getAuth();

    
    const register = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            props.close();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
            <div className="form" onClick={handleModalContainerClick}>
                {props.btn}
                <h1>Inscribite</h1>
                <div className="flex-column">
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Correo electrónico"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="Creá una contraseña"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn"
                    onClick={register}>Crear cuenta</button>
                </div>
            </div>
    )
}
