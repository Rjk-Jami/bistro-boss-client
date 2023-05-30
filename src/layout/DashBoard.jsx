import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaEnvelopeOpenText, FaRegCalendarCheck, FaGripHorizontal, FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import useCart from "../components/hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col   ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80  text-base-content bg-[#D1A054] font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink  to='/dashboard/'><FaHome className="text-3xl text-success"></FaHome>User Home</NavLink></li>
                    <li><NavLink  to='/dashboard/reservation'><FaCalendarAlt className="text-3xl text-success"></FaCalendarAlt>Reservation</NavLink></li>
                    <li><NavLink  to='/dashboard/payment'><FaWallet className="text-3xl text-success"></FaWallet>Payment History</NavLink></li>
                    <li>
                    
                <NavLink className=""  to='/dashboard/mycart'> 
                <div className="indicator flex gap-2 ">
                <span className="indicator-item badge badge-xs badge-error ">{cart?.length || 0}</span>
                <FaShoppingCart className="text-3xl text-success"></FaShoppingCart>
                <p>My Cart</p> 
                </div>
                </NavLink>
           </li>
                    <li><NavLink  to='/dashboard/addcomment'><FaEnvelopeOpenText className="text-3xl text-success"></FaEnvelopeOpenText>Add Comment</NavLink></li>
                    <li><NavLink  to='/dashboard/mybookings'><FaRegCalendarCheck className="text-3xl text-success"></FaRegCalendarCheck>My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink  to='/'><FaHome className="text-3xl text-success"></FaHome>Home</NavLink></li>
                    <li><NavLink  to='/menu'><FaGripHorizontal className="text-3xl text-success"></FaGripHorizontal>Menu</NavLink></li>
                    <li><NavLink  to='/order/salad'><FaShoppingBag className="text-3xl text-success"></FaShoppingBag>Shop</NavLink></li>
                    <li><NavLink  to='/contact'><FaEnvelope className="text-3xl text-success"></FaEnvelope>Contact</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;