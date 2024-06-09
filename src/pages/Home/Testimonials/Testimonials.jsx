import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={Math.random} review={review}>
              <div className="flex flex-col items-center m-24">
                <Rating 
                style={{ maxWidth: 180 }} 
                value={review.rating} readOnly />
                <p className="my-4">{review.details}</p>
                <h3 className="text-2xl text-orange-600">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
