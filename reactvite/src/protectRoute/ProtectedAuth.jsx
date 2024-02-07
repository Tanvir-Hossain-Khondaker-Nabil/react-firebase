// In ProtectedAuth.jsx

import { Navigate } from "react-router"
import Login from "../pages/registration/Login"

export const ProtectedAuth = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        return <Navigate to={'/'}/>
    }else{
        return children
    }
 }