import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg p-10">
        <div className="m-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
          />
        </div>
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
          />
        </div>
        <div className="m-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="m-5">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repetir password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu password"
            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Ya tienes una cuenta? Inicia Sesion
        </Link>
        <Link
          className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  ); 
};

export default Registrar;
