import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'



// import required modules
import { Pagination, Navigation } from "swiper";
import { data } from 'autoprefixer';
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-rjk-jami.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section >
            <SectionTitle heading={"TESTIMONIALS"} subHeading={'What Our Clients Say'} ></SectionTitle>
            <div className="">
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="m-24 text-center flex flex-col items-center justify-center gap-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className='text-orange-400 text-3xl uppercase'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;