import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.page";
import GuestLayout from "./layouts/Guest.layout";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<GuestLayout/>}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
