import { useContext } from "react"
import { Navigate } from 'react-router-dom';

import { AuthContext } from "../contexts/AuthContext"

export const GuestGuard = ({children}) => {
    const {authData} = useContext(AuthContext);

    if(!Boolean(authData.accessToken)){
        return <Navigate to='/login' replace />
    }

    return (
        <>
            {children}
        </>
    )
}