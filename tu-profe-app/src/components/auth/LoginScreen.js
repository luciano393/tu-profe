import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword } from '../../redux/actions/auth';
import { useForm } from '../../hooks/useForm';

import Swal from "sweetalert2";


export const LoginScreen = ({close, btn}) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password));
        setTimeout(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Haz iniciado sesión correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              close();
        }, 1500)   
    }
    
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
            <form className="form" onSubmit={ handleLogin } onClick={handleModalContainerClick}>
                {btn}
                <h1>Conectate</h1>
                <div className="flex-column">
                    <input 
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                    />
                    <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                    />
                    <button 
                    className="btn"
                    type="submit"
                    disabled={ loading }
                    >Conexión</button>
                </div>
            </form>
    )
}
