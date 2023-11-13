import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Proyectos from "./paginas/Proyectos";
import NuevoProyecto from "./paginas/NuevoProyecto";

import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar-cuenta/:id" element={<ConfirmarCuenta />} />
          </Route>
          //Area Privada
          <Route path="/proyectos" element={<RutaProtegida />}> //este componente lo que hace es tene rla logica para proteger a los proximos componentes
            <Route index element={<Proyectos />} />
            <Route path='crear-proyecto' element={<NuevoProyecto />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
