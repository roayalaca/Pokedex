import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="general-container">
            <nav className="aside">
                ASIDE
            </nav>
            <Outlet/>
            <footer className="footer">

            </footer>
        </div>
    );
};

export default MainLayout;