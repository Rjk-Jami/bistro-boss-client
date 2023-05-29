import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes("login") || location.pathname.includes("signUp")
    return (
        <div>
            {isLogin || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;