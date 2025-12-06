import { useContext } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const {logout} = useContext(AuthContext);

    const handleLogout = (e)=>{
        e.preventDefault();
        logout();
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-black px-3">
                <button className="btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
                    ☰ Menu
                </button>
                <span className="navbar-brand ms-2">Dashboard</span>
            </nav>
            {/* SIDEBAR */}
            <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex={-1} id="sidebar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group list-group-flush">
                        <a className="list-group-item bg-dark text-white border-secondary">Dashboard</a>
                        <a className="list-group-item bg-dark text-white border-secondary">Profile</a>
                        <a className="list-group-item bg-dark text-white border-secondary">Settings</a>
                        <Link onClick={handleLogout} className="list-group-item bg-dark text-white border-secondary">Logout</Link>
                    </ul>
                </div>
            </div>
        </>
    );
};
