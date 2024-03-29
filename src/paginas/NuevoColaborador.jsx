import { useEffect } from "react"
import FormularioColaborador from "../components/FormularioColaborador"
import useProyectos from "../hooks/useProyectos"
import { useParams } from "react-router-dom"
import Alert from "../components/Alert"

const NuevoColaborador = () => {
    
  const { obtenerProyecto, proyecto, cargando, colaborador, agregarColaborador, alerta } = useProyectos()
  const params = useParams()

    useEffect(() => {
      obtenerProyecto(params.id)
    }, [])


    if(!proyecto._id) return <Alert alerta={alerta} />

  return (
    <>
        <h1 className="text-4xl font-black">Añadir colaborador al proyecto: {proyecto.nombre}</h1>
        <div className="mt-10 flex justify-center">
            <FormularioColaborador />
        </div>

        {cargando ? <p className="text-center mt-10">Cargando...</p> : colaborador?._id && (
          <div className="flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
              <h2 className="text-center mb-10 text-2xl font-bold">
                Resultado:
              </h2>
              <div className="flex justify-between place-items-center">
                <p className="px-5">{colaborador.nombre}</p>

                <button
                  type="button"
                  className="bg-slate-500 px-5 py-2 rounded-lg uppercase text-white font-bold text-sm"
                  onClick={() => agregarColaborador({
                    email: colaborador.email
                  })}
                >
                  Agregar al proyecto</button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default NuevoColaborador