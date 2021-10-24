import { provider } from '../../config/firebase-config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { types } from '../types/types';
import { startLoading, finishLoading } from "./ui";


const auth = getAuth()

export const startLoginEmailPassword = (email, password) => {
    return(dispatch) => {
        dispatch( startLoading() );

        signInWithEmailAndPassword(auth, email, password)
            .then( ({user}) => {
                dispatch(loginUser( user.uid, user.displayname));

                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
            })
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        createUserWithEmailAndPassword(auth, email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    loginUser( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
            })

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        signInWithPopup( provider )
            .then( ({ user }) => {
                dispatch(
                    ( user.uid, user.displayName )
                )
            });

    }
}

export const loginUser = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await signOut(auth);

        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})

