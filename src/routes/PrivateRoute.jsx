import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth()

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }
if(!user){
    <Navigate to={'/login'}></Navigate>
}
    return 
};

export default PrivateRoute;