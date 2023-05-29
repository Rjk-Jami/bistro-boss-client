import { useEffect, useState } from "react";
import useMenu from "../../../components/hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    // const [menu, setMenu]= useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data=>setMenu(data.filter(item=>item.category === "popular")) )
    // },[])

    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === "popular")
    return (
        <section className="mb-12">
            <SectionTitle heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="items-center justify-center flex my-10">
                <button className="btn bg-orange-100 text-black hover:text-white border-0 border-b-4 ">View All Menu</button>

            </div>
        </section>
    );
};

export default PopularMenu;