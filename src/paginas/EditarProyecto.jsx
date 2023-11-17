import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import FormularioProyecto from "../components/FormularioProyecto";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  if (cargando) return "Cargando...";

  const { nombre } = proyecto;

  return (
    <>
      <h1 className="font-black text-4xl">Editar proyecto: {nombre}</h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  );
};

export default EditarProyecto;
