
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="my-5 font-serif  text-4xl uppercase text-center text-white -mt-16 ">salads</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="my-5 font-serif  text-4xl uppercase text-center text-white -mt-16 ">Soups</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="my-5 font-serif  text-4xl uppercase text-center text-white -mt-16 ">Pizzas</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="my-5 font-serif  text-4xl uppercase text-center text-white -mt-16 ">desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img  src={img5} alt="" />
            <h3 className="my-5 font-serif  text-4xl uppercase text-center text-white -mt-16 ">salads</h3>
            </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;