import { useContext } from "react"
import { AuthContext } from "../Context/Auth.context"
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export const ProtectedRoute = ({children})=>{
    const {loading,isAuth} = useContext(AuthContext);
    const navigateTo = useNavigate();
    if(loading){
        return <Loading/>
    }

    if(!isAuth){
        return navigateTo("/login")
    }

    return {children}
}