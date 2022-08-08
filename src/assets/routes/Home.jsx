import React from "react";
import InstagramFeed from "../components/InstagramFeed";

function Home() {
  return (
    <>
      <div className="mx-auto h-screen bg-blanco-perla w-11/12 ">
        <InstagramFeed />
      </div>
      <div className="h-screen bg-blanco-perla"></div>
      <div className="h-screen bg-blanco-perla"></div>
    </>
  );
}

export default Home;
