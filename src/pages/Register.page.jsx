import {useContext, useState} from "react";
import {AuthContext} from "../Context/Auth.context";

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
        nama: "",
        jenis_kelamin: "",
        tgl_lahir: "",
    });

    const handleDate = (e) => {
        const iso = new Date(e.target.value).toISOString();
        setForm((prev) => ({...prev, tgl_lahir:iso}));
    };
    const {register} = useContext(AuthContext);
    const handleChage = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        register(form);
    };
    return (
        <>
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
                <div className="card bg-dark text-white border-secondary shadow-lg" style={{width: "30rem"}}>
                    <div className="card-body">
                        <h3 className="text-center mb-4">Daftar Akun</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    name="nama"
                                    className="form-control bg-secondary text-white border-0"
                                    onChange={handleChage}
                                    placeholder="Nama lengkap"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-secondary text-white border-0"
                                    name="email"
                                    onChange={handleChage}
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Jenis Kelamin</label>
                                <select
                                    className="form-select bg-secondary text-white border-0"
                                    name="jenis_kelamin"
                                    onChange={handleChage}
                                >
                                    <option value="" disabled="" selected="">
                                        Pilih
                                    </option>
                                    <option value="laki_laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    name="tgl_lahir"
                                    className="form-control bg-secondary text-white border-0"
                                    onChange={handleDate}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control bg-secondary text-white border-0"
                                    name="password"
                                    onChange={handleChage}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Konfirmasi Password</label>
                                <input
                                    name="confirm_password"
                                    onChange={handleChage}
                                    type="password"
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="Ulangi password"
                                />
                            </div>
                            <button className="btn btn-success w-100 mt-2">Daftar</button>
                            <p className="text-center mt-3 mb-0">
                                Sudah punya akun?
                                <a href="login.html" className="text-info">
                                    Masuk
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
