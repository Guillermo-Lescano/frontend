import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //todo lo que haga antes del return son funciones que puedo definir, lo que coloco dentro del value son a los cual puedo acceder

  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true); //creamos este estado porque demora en tener la info de auth
  //asi que siempre nos va a tomar como que no tiene datos, solo que hay que esperar que sea false para mostrar el html

  const navigate = useNavigate()

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false)
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios(`/usuarios/perfil`, config);
        //este perfil requiere en el back (porque esta protegida esa ruta), requiere la autenticacion y el bearerToken, lo mandamos como configuraicon
        //data nos traew email, nombre e id, osea el perfil del usuario logeado
        setAuth(data); //guardamos el perfil en el stado auth
        //navigate('/proyectos') //esto sirve por si tiene token, para no volver a logear, directamente te lleva a la pagina de proyectos
      } catch (error) {
        setAuth({})
      } finally {
        setCargando(false);
      }
    };
    autenticarUsuario();
  }, []); //se ejecuta una vez, porque va a comprobar si hay un token

  return (
    //todo lo que este dentro del return es a lo cual podemos acceder
    <AuthContext.Provider
      value={{
        setAuth,
        auth,
        cargando
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
