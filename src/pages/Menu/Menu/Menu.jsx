import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import bg from "../../../assets/menu/banner3.jpg"
import bgDessert from "../../../assets/menu/dessert-bg.jpeg"
import bgPizza from "../../../assets/menu/pizza-bg.jpg"
import bgSalad from "../../../assets/menu/salad-bg.jpg"
import bgSoup from "../../../assets/menu/soup-bg.jpg"
import useMenu from '../../../components/hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
            const [menu] = useMenu()
            const todayOffer = menu.filter(item=>item.category === "offered")
            const pizza = menu.filter(item=>item.category === "pizza")
            const dessert = menu.filter(item=>item.category === "dessert")
            const salad = menu.filter(item=>item.category === "salad")
            const soup = menu.filter(item=>item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover bg={bg} title={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"}
                            subHeading={"Don't miss"}
                ></SectionTitle>
                
            <MenuCategory items={todayOffer}></MenuCategory>

            {/* dessert section */}

            <MenuCategory items={dessert} title={"dessert"} img={bgDessert}></MenuCategory>
            {/* pizza section */}

            <MenuCategory items={pizza} title={"pizza"} img={bgPizza}></MenuCategory>

            {/* salad section */}

            <MenuCategory items={salad} title={"salad"} img={bgSalad}></MenuCategory>

            {/* soup section */}

            <MenuCategory items={soup} title={"soup"} img={bgSoup}></MenuCategory>

            
        </div>
    );
};

export default Menu;