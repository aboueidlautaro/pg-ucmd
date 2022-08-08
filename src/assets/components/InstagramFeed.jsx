import React, { useEffect, useState } from "react";
import jeison from "../static/json/TestAPI.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

function InstagramFeed() {
  const [publicaciones, setPublicaciones] = useState([]);

  //useEffect(() => {
  //axios.get(apiresponse).then((response) => {
  //setPublicaciones(response.data.data);
  //});
  //}, []);

  return (
    <>
      <div className="my-8 py-6 rounded-lg bg-rosa-pastel shadow-md shadow-grafito-claro/60">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {jeison.data.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <a
                    href={value.permalink}
                    className="h-[450px] p-3 bg-blanco-perla rounded-lg sm:h-96 w-11/12 flex sm:flex-row flex-col justify-start sm:justify-center items-center"
                  >
                    <img
                      className="shadow-md shadow-grafito-claro/60 rounded-md max-w-72 max-h-72 sm:max-w-96 sm:w-96 sm:h-full sm:max-h-full mx-2"
                      src={value.media_url}
                    />
                    <p className="textOverflow  mt-3 sm:mt-0 text-[#303030] font-medium mx-2 max-h-1/3 sm:max-h-96 w-full inline-block text-ellipsis ...  ">
                      {value.caption}
                    </p>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default InstagramFeed;
