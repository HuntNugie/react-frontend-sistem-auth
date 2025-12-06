export default function Login() {
    return (
        <>
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
                <div className="card bg-dark text-white border-secondary shadow-lg" style={{width: "25rem"}}>
                    <div className="card-body">
                        <h3 className="text-center mb-4">Masuk</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-secondary text-white border-0"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
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
            </div>
        </>
    );
}
