import React from "react";
import InstagramFeed from "../components/InstagramFeed";
import Packages from "../components/Packages";

function Home() {
  return (
    <>
      <div className="mx-auto h-auto bg-blanco-perla w-11/12 mb-16">
        <InstagramFeed />
        <Packages />
      </div>
    </>
  );
}

export default Home;
