export default function Dashboard() {
    return (
        <div className="container-fluid bg-secondary text-white p-5" style={{minHeight: "100vh"}}>
            <h1 className="mb-4">Selamat Datang di Dashboard</h1>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card bg-dark text-white border-secondary shadow">
                        <div className="card-body">
                            <h5 className="card-title">Statistik 1</h5>
                            <p className="card-text">Informasi ringkas tentang statistik pertama.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-dark text-white border-secondary shadow">
                        <div className="card-body">
                            <h5 className="card-title">Statistik 2</h5>
                            <p className="card-text">Informasi ringkas tentang statistik kedua.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-dark text-white border-secondary shadow">
                        <div className="card-body">
                            <h5 className="card-title">Statistik 3</h5>
                            <p className="card-text">Informasi ringkas tentang statistik ketiga.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
