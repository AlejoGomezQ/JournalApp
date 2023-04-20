import { sigInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"


export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
};

export const startGoogleSingIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await sigInWithGoogle();
        if(!result.ok) return dispatch(logout( result.errorMessage ))

        dispatch(login( result ))
    }
};