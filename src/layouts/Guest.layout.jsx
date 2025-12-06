import {Outlet} from "react-router-dom";

export default function GuestLayout() {
    return (
        <>
            <div className="cube">
                <div style={{transform: "rotateY(0deg) translateZ(70px)"}} />
                <div style={{transform: "rotateY(90deg) translateZ(70px)"}} />
                <div style={{transform: "rotateY(180deg) translateZ(70px)"}} />
                <div style={{transform: "rotateY(-90deg) translateZ(70px)"}} />
                <div style={{transform: "rotateX(90deg) translateZ(70px)"}} />
                <div style={{transform: "rotateX(-90deg) translateZ(70px)"}} />
            </div>
            <Outlet/>
        </>
    );
}
