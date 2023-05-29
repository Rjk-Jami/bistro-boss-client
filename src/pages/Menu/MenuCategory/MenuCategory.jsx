import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../shared/Cover/Cover';
import MenuItem from '../../shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-12">
            {title && <Cover bg={img} title={title} subTitle={"Food order websites or online food delivery platforms allow users to order food from various restaurants or eateries in their area. These platforms typically have a website or mobile app where users can browse menus, select their desired dishes, customize their orders, and proceed to checkout."}></Cover>}
            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="items-center justify-center flex my-10">
                <Link to={`/order/${title}`}> <button className="btn btn-wide bg-orange-100 text-black hover:text-white border-0 border-b-4 ">View All Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;