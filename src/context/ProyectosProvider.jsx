import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [proyecto, setProyecto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [modalFormularioTarea, setModalFormularioTarea] = useState(false);
  const [tarea, setTarea] = useState({})
 
  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/proyectos", config);
        setProyectos(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    obtenerProyectos();
  }, []);

  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const submitProyecto = async (proyecto) => {
    //ACA RECIBIMOS LA INFO QUE TIENE LOS STATES EN EL FORMULARIO
    if (proyecto.id) {
      await editandoProyecto(proyecto);
    } else {
      await nuevoProyecto(proyecto);
    }
    return;
  };

  const nuevoProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/proyectos", proyecto, config);

      setProyectos([...proyectos, data]); //tomamos la copia de los proyectos actuales y le agregamos el nuevo proyecto nos ahorramos consultar la db

      setAlerta({
        msg: "Proyecto Creado Correctamente.",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const editandoProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.put(
        `proyectos/${proyecto.id}`,
        proyecto,
        config
      );
      //sincronizar el state
      const proyectosActualizados = proyectos.map(proyectoState => proyectoState._id === data._id ? data : proyectoState)
      setProyectos(proyectosActualizados)

      //mostrar la alerta
      setAlerta({
        msg: "Proyecto actualizado Correctamente.",
        error: false
      });

      //redireccionar
      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 3000);

    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProyecto = async (id) => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios(`/proyectos/${id}`, config);
      setProyecto(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const eliminarProyecto = async id => {
    try {
      const token = localStorage.getItem('token')
      if(!token) return
      
      const config = {
        headers : {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.delete(`/proyectos/${id}`, config)
      //sincronizar el state cuando se elimina se utiliza un filter
      const proyectosActualizados = proyectos.filter(proyectoState => proyectoState._id !== id)
      setProyectos(proyectosActualizados)

      setAlerta({
        msg: data.msg,
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 3000);
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleModalTarea = () => {
    setModalFormularioTarea(!modalFormularioTarea)
    setTarea({})
  }

  const submitTarea = async(tarea) =>{
    if(tarea?.id){
      await editarTarea(tarea)
    }else{
      await crearTarea(tarea)
    }
  }

  const crearTarea = async tarea => {
    try {
      const token = localStorage.getItem('token')
      if(!token) return
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.post('/tareas', tarea, config)
  
      //agrega la tarea al state
      const proyectoActualizado = {
        ...proyecto
      }
      proyectoActualizado.tareas = [...proyecto.tareas, data] //Le agregampos en este caso data al final del arreglo, data es la tarea nueva

      setProyecto(proyectoActualizado)
      setAlerta({})
      setModalFormularioTarea(false)
    } catch (error) {
      console.log(error)
    }
  }

  const editarTarea = async tarea =>{
    try {
      const token = localStorage.getItem('token')
      if(!token) return
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const {data} = await clienteAxios.put(`/tareas/${tarea.id}`, tarea, config)
      
      //TODO: Actualizar el DOM

      const proyectoActualizado = {...proyecto}
      proyectoActualizado.tareas = proyectoActualizado.tareas.map( tareaState => tareaState._id === data._id ? data : tareaState )

      setProyecto(proyectoActualizado)
      setAlerta({})
      setModalFormularioTarea(false)
      
    } catch (error) {
      console.log(error)
    }
  }


  const handleModalEditarTarea = tarea => {
    setTarea(tarea)
    setModalFormularioTarea(true)
  }

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto,
        modalFormularioTarea,
        handleModalTarea,
        submitTarea,
        handleModalEditarTarea,
        tarea
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
