import {useState, useEffect} from 'react'
//useParams sirve para leer el token de la URL
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alert from '../components/Alert'

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(() =>{
    const confirmarCuenta = async () =>{
      try {
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios(url)
        //console.log('data', data)
        setAlerta({
          msg: data.msg,
          error: false
        })
        
        setCuentaConfirmada(true)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg, 
          error: true})
      }

    }
    confirmarCuenta()
  },[]) 

  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Confirma tu cuenta y comienza a crear tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
        {msg && <Alert alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
         Inicia Sesion
        </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta