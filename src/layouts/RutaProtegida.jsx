import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RutaProtegida = () => {

    const { auth, cargando } = useAuth()
    console.log(auth)
    if(cargando) return 'Cargando...'
  return (
    <>
        {auth._id ? <Outlet /> : <Navigate to='/' />}
        {/*Si no tiene nada, nos lleva a la pagina principal */}
    </>
  )
}

export default RutaProtegida
