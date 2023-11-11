import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //todo lo que haga antes del return son funciones que puedo definir, lo que coloco dentro del value son a los cual puedo acceder

    const [auth, setAuth] = useState({})

    useEffect(() =>{
      const autenticarUsuario = async () => {
        const token = localStorage.getItem('token')
        if(!token){
            return
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const {data} = await clienteAxios(`/usuarios/perfil`, config)
            //este perfil requiere en el back (porque esta protegida esa ruta), requiere la autenticacion y el bearerToken, lo mandamos como configuraicon
            //data nos traew email, nombre e id, osea el perfil del usuario logeado
            setAuth(data) //guardamos el perfil en el stado auth
        } catch (error) {
            console.log(error)
        }

      }
      autenticarUsuario()
    },[]) //se ejecuta una vez, porque va a comprobar si hay un token

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