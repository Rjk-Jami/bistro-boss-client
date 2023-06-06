import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaEnvelopeOpenText, FaRegCalendarCheck, FaGripHorizontal, FaShoppingBag, FaEnvelope, FaUtensils, FaAlignJustify, FaBook, FaUserFriends } from 'react-icons/fa';
import useCart from "../components/hooks/useCart";
import useAdmin from "../components/hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart()



    //TODO : load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  bg-slate-200 ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80  text-base-content bg-[#D1A054] font-semibold">
                    {/* <!-- Sidebar content here --> */}

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome className="text-3xl text-neutral"></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils className="text-3xl text-neutral"></FaUtensils>Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaAlignJustify className="text-3xl text-neutral"></FaAlignJustify>Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><FaBook className="text-3xl text-neutral"></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUserFriends className="text-3xl text-neutral"></FaUserFriends>All Users</NavLink></li>


                            </>


                            :

                            <>
                                <li><NavLink to='/dashboard/userhome'><FaHome className="text-3xl text-neutral"></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt className="text-3xl text-neutral"></FaCalendarAlt>Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaWallet className="text-3xl text-neutral"></FaWallet>Payment History</NavLink></li>
                                <li>
                                    <NavLink className="" to='/dashboard/mycart'>
                                        <div className="indicator flex gap-2">
                                            <span className="indicator-item badge badge-xs badge-error ">{cart?.length || 0}</span>
                                            <FaShoppingCart className="text-3xl text-neutral"></FaShoppingCart>
                                            <p>My Cart</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/addcomment'><FaEnvelopeOpenText className="text-3xl text-neutral"></FaEnvelopeOpenText>Add Comment</NavLink></li>
                                <li><NavLink to='/dashboard/mybookings'><FaRegCalendarCheck className="text-3xl text-neutral"></FaRegCalendarCheck>My Bookings</NavLink></li>


                            </>
                    }
                    <div className="divider"></div>
                    {/* same for both admin and users */}
                    <li><NavLink to='/'><FaHome className="text-3xl text-neutral"></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><FaGripHorizontal className="text-3xl text-neutral"></FaGripHorizontal>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag className="text-3xl text-neutral"></FaShoppingBag>Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope className="text-3xl text-neutral"></FaEnvelope>Contact</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default DashBoard;