import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg p-10">
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

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
        className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to='registrar'
        >¿No tienes una cuenta? Regístrate</Link>
        <Link
        className="flex text-center my-5 text-slate-500 uppercase text-sm"
          to='/olvide-password'
        >Olvide mi password</Link>
      </nav>
    </>
  );
};

export default Login;
