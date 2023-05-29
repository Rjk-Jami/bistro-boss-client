import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import bg from "../../../assets/home/chef-service.jpg"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Cover bg={bg} title={"Bistro Boss"} subTitle={"Food order websites or online food delivery platforms allow users to order food from various restaurants or eateries in their area. These platforms typically have a website or mobile app where users can browse menus, select their desired dishes, customize their orders, and proceed to checkout. The platforms may offer delivery or pickup options depending on the restaurant and location."}></Cover>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;