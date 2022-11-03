import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.scss"

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Layout;
