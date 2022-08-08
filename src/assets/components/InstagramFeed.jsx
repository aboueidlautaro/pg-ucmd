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
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default InstagramFeed;
