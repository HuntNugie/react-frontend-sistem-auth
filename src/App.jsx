import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";
import AuthLayout from "./layouts/Auth.layout";
import Dashboard from "./pages/Dashboard";
import {ProtectedRoute} from "./Routes/Protected.route";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"} replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    element={
                        <ProtectedRoute>
                            <AuthLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
