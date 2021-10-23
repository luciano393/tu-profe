import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'

export const LoginScreen = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const auth = getAuth();
    
    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
            <div className="form" onClick={handleModalContainerClick}>
                {props.btn}
                <h1>Conectate</h1>
                <div className="flex-column">
                    <input type="email" id="email" placeholder="Correo electrónico"
                    autoComplete="off"
                    onChange={setEmail}
                    />
                    <input 
                    type="password" id="password" placeholder="Ingresá tu contraseña"
                    onChange={setPassword}
                    />
                    <button className="btn" onClick={login}>Conexión</button>
                </div>
            </div>
    )
}
