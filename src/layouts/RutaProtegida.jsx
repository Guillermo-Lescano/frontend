import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RutaProtegida = () => {

    const { auth } = useAuth()
    console.log(auth)

  return (
    <>
        {auth._id ? 'Autenticado' : <Navigate to='/' />}
        {/*Si no tiene nada, nos lleva a la pagina principal */}
    </>
  )
}

export default RutaProtegida
