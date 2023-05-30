import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./styles.css";

const OrderTab = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    // Split the 'item' array into chunks of 6 items
    const sliderItemsSize = 6;
    const sliderItems = item.reduce((resultArray, item, index) => { 
        const sliderIndex = Math.floor(index / sliderItemsSize);
        if (!resultArray[sliderIndex]) {
            resultArray[sliderIndex] = []; // start a new chunk
        }
        resultArray[sliderIndex].push(item);
        return resultArray;
    }, []);

    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            {sliderItems.map((item, index) => (
                <SwiperSlide  key={index}>
                    <div className="grid md:grid-cols-3 gap-4">
                        {item.map((item) => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OrderTab;
