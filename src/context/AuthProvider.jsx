import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //todo lo que haga antes del return son funciones que puedo definir, lo que coloco dentro del value son a los cual puedo acceder

    const [auth, setAuth] = useState({})

    return( //todo lo que este dentro del return es a lo cual podemos acceder
        <AuthContext.Provider
            value={{
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}

export default AuthContext