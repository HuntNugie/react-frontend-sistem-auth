export default function Register() {
    return (
        <>
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
                <div className="card bg-dark text-white border-secondary shadow-lg" style={{width: "30rem"}}>
                    <div className="card-body">
                        <h3 className="text-center mb-4">Daftar Akun</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="Nama lengkap"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Jenis Kelamin</label>
                                <select className="form-select bg-secondary text-white border-0">
                                    <option value="" disabled="" selected="">
                                        Pilih
                                    </option>
                                    <option>Laki-laki</option>
                                    <option>Perempuan</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tanggal Lahir</label>
                                <input type="date" className="form-control bg-secondary text-white border-0" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Konfirmasi Password</label>
                                <input
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
