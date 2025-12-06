export default function Login() {
    return (
        <>
            <div className="glass-card">
                <h2 className="text-center mb-4">Masuk</h2>
                <form>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control input-custom" placeholder="example@mail.com" />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control input-custom" placeholder="Password" />
                    </div>
                    <button className="btn btn-custom w-100 py-2 mt-2">Login</button>
                    <p className="text-center mt-3 mb-0">
                        Tidak punya akun?{" "}
                        <a href="register.html" className="text-info">
                            Daftar
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
