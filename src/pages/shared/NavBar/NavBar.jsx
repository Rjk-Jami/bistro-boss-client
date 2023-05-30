import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../components/hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    console.log(user)
    const handleLogOut = () => {
        logOut()

    }
    const navbar = <>
        <Link to="/">Home</Link>
        <Link to="/" className="">Contract Us</Link>
        <Link to="/">DashBoard</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/salad">Our Shop</Link>
        <Link to="dashboard/mycart">
            <div className="indicator">
                <span className="indicator-item badge badge-xs badge-error ">{cart?.length || 0}</span>
                <FaShoppingCart className="text-3xl text-success"></FaShoppingCart>
            </div>
        </Link>
        {
            user ? <><div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <img src={user?.photoURL} alt="" />
                </div>
            </div><button onClick={handleLogOut} className="font-semibold btn- btn-outline btn-success mx-4">Log out</button></> : <Link to="/login" className="font-semibold mx-4">Login</Link>
        }


    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>

            <div className="navbar-end">
                <ul className=" menu font-semibold space-x-4 menu-horizontal px-1 hidden lg:flex">
                    {navbar}

                </ul>

            </div>

        </div>
    );
};

export default NavBar;