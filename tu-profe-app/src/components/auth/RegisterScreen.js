import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../../redux/actions/auth';
import { removeError, setError } from '../../redux/actions/ui';
import validator from 'validator';
import Swal from 'sweetalert2';


export const RegisterScreen = ({close, btn}) => {
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues;

    const handleRegiste = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name));
            setTimeout(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  close();
            }, 1500) 
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch( setError('Nombre es requerido'))
            return false;
        } else if( !validator.isEmail(email)) {
            dispatch( setError('El correo electrónico no es valido'))
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('La contraseña debe tener mas de 6 caracteres o ser igual a la otra'))
            return false
        }

        dispatch( removeError() );
        return true;
    }
    
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
            <form 
            className="form" 
            onClick={handleModalContainerClick}
            onSubmit={ handleRegiste }
            >
                {btn}
                <h1>Inscribite</h1>
                <div className="flex-column">
                    {
                        msgError && 
                        (
                            <div className="error">
                                { msgError}
                            </div>
                        )
                    }
                    <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    />
                    <input 
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    autoComplete="off"
                    onChange={ handleInputChange}
                    />
                    <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={ handleInputChange }
                    />

                    <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    onChange={ handleInputChange }
                    />
                    <button 
                    className="btn"
                    type="submit"
                    >Crear cuenta</button>
                </div>
            </form>
    )
}
