import axios from "axios";
import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

// buat auth context
export const AuthContext = createContext();

// buat provider
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const navigateTo = useNavigate();
    const api = import.meta.env.VITE_BACKEND_API;
    // membuat untuk login
    const login = async (email, password) => {
        try {
            const req = await axios.post(`${api}/api/auth/login`, {email, password}, {withCredentials: true});
            const data = req.data;
            setUser(data);
            setIsAuth(true);
            navigateTo("/dashboard")    
        } catch (error) {
            setUser(null);
            setIsAuth(false);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // untuk logout
    const logout = async () => {
        try {
            await axios.post(`${api}/api/auth/logout`, {}, {withCredentials: true});
            setUser(null)
            navigateTo("/login")
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    };

    // untuk register
    const register = async(data)=>{
        try {
             await axios.post(`${api}/api/auth/register`,data);
            navigateTo("/login");
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }
    // checkMe
    useEffect(() => {
        const checkMe = async () => {
            try {
                const res = await axios.get(`${api}/api/auth/me`, {withCredentials: true});
                const data = res.data;
                setIsAuth(true);
                setUser(data);
            } catch (error) {
                console.log(error);
                setIsAuth(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkMe();
    }, []);
    return <AuthContext.Provider value={{loading, isAuth, user, login, error,logout,register}}>{children}</AuthContext.Provider>;
};
