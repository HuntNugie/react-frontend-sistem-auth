import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/Auth/Sidebar";
export default function AuthLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}
