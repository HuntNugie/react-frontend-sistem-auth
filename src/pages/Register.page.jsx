export default function Register() {
    return (
        <>
            <div className="glass">
                <h2 className="text-center mb-4">Buat Akun Baru</h2>
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Nama</label>
                            <input type="text" className="form-control input-custom" placeholder="Nama lengkap" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control input-custom" placeholder="example@mail.com" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control input-custom" placeholder="Password" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Konfirmasi Password</label>
                            <input
                                type="password"
                                className="form-control input-custom"
                                placeholder="Konfirmasi password"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Jenis Kelamin</label>
                            <select className="form-select input-custom">
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Tanggal Lahir</label>
                            <input type="date" className="form-control input-custom" />
                        </div>
                    </div>
                    <button className="btn btn-custom w-100 py-2 mt-2">Register</button>
                    <p className="text-center mt-3">
                        Sudah punya akun?{" "}
                        <a href="login.html" className="text-info">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
