import React, { useEffect, useState } from "react";
import jeison from "../static/json/TestAPI.json";
import Carousel from "better-react-carousel";

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
        <Carousel cols={1} rows={1} gap={10} loop>
          {jeison.data.map((value, index) => {
            return (
              <Carousel.Item>
                <div className="flex justify-center items-center">
                  <a
                    key={index}
                    href={value.permalink}
                    className="h-[450px]  sm:h-96 w-full flex sm:flex-row flex-col justify-start sm:justify-center items-center"
                  >
                    <img
                      className="shadow-md shadow-grafito-claro/60 rounded-md max-w-72 max-h-72 sm:max-w-96 sm:w-96 sm:h-full sm:max-h-full mx-2"
                      src={value.media_url}
                    />
                    <p className="text-[#303030] font-medium mx-2 max-h-1/3 sm:max-h-96 w-full inline-block text-ellipsis">
                      {value.caption}
                    </p>
                  </a>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default InstagramFeed;
