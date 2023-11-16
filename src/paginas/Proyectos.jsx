import useProyectos from "../hooks/useProyectos"

const Proyectos = () => {

  const {proyectos} = useProyectos()
  console.log(proyectos)

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      <div className="bg-white shadow mt-10 rounded-lg p-5">
        {proyectos.length === 0 ? <p>Si hay proyectos</p> : <p className="text-center text-gra-600 uppercase">No hay proyectos aun</p>}
      </div>
    </>
  )
}

export default Proyectos