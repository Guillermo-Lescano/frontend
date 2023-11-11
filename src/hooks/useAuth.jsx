//la idea es tener un hook por cada context
import { useContext } from "react";
//esto nos ayuda a acceder a la info del context
import AuthContext from "../context/AuthProvider";


const useAuth = () => {
    //entonces aca con el useContext accedemos a los datos de authContext, leemos todo lo que tengamos en este context
    return useContext(AuthContext)
}

export default useAuth