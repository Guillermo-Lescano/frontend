import React, { useState } from "react";

const FormularioProyecto = () => {

    const [nombre , setNombre] = useState('')
    const [descripcion , setDescripcion] = useState('')
    const [fechaEntrega , setFechaEntrega] = useState('')
    const [cliente , setCliente] = useState('')

  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
      <div className="mb-5">
        <label
          htmlFor="nombre"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Proyecto
        </label>
        <input
            id='nombre'
            type="text"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del proyecto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
      </div>
      <div className="mb-5">
        <label
          htmlFor="descripcion"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Descripcion
        </label>
        <textarea
            id='descripcion'
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion del proyecto"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            />
      </div>
      <div className="mb-5">
        <label
          htmlFor="fecha-entrega"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Fecha de Entrega
        </label>
        <input
            id='fecha-entrega'
            type='date'
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Fecha de entrega del proyecto"
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
            />
      </div>
      <div className="mb-5">
        <label
          htmlFor="cliente"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Cliente
        </label>
        <input
            id='cliente'
            type="text"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Cliente"
            value={cliente}
            onChange={e => setCliente(e.target.value)}
            />
          <input type="submit" value='Crear proyecto' className="bg-sky-600 py-3 uppercase font-bold text-white rounded cursor-pointer bg-sky-700 transition-colors" />
      </div>
    </form>
  );
};

export default FormularioProyecto;
