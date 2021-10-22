import clienteAxios from '../config/axios';

// Constantes
const dataInicial = {
    array : []
}

const OBTENER_CLASES_EXITO = 'OBTENER_CLASES_EXITO';

// Reducer
export default function clasesReducer(state = dataInicial, action) {
    switch(action.type) {
        case OBTENER_CLASES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// Acciones
export const obtenerClasesAccion = () => async(dispatch, getState) => {
    try {
        const res = await clienteAxios.get('/clases')
            dispatch({
                type: OBTENER_CLASES_EXITO,
                payload: res.data
            });
    } catch (error) {
        console.log(error);
    }
}