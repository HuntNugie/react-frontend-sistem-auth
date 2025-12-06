import { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth.context";
import Loading from "../components/Loading";

export default function Login() {
    const {loading,login} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(email,password)
    }
    return (
        <>
        {loading ? (<Loading/>) :     <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
                <div className="card bg-dark text-white border-secondary shadow-lg" style={{width: "25rem"}}>
                    <div className="card-body">
                        <h3 className="text-center mb-4">Masuk</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="btn btn-primary w-100 mt-2">Login</button>
                            <p className="text-center mt-3 mb-0">
                                Belum punya akun?
                                <a href="register.html" className="text-info">
                                    Daftar
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    );
}
