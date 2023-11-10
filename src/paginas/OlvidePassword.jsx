import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import clienteAxios from "../config/clienteAxios";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === " " || email.length < 6) {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }
    //generamos email para la recuperacion
    try {
      const url = `/usuarios/olvide-password`;
      const { data } = await clienteAxios.post(url, { email });
      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Recupera tu acceso y no pierdas tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alert alerta={alerta} />}
      <form
        onSubmit={handleSubmit}
        action=""
        className="my-10 bg-white shadow rounded-lg p-10"
      >
        <div className="m-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Enviar instrucciones"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia Sesion
        </Link>
        <Link
          className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export default OlvidePassword;
