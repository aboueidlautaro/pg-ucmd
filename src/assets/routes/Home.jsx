import React from "react";
import InstagramFeed from "../components/InstagramFeed";
import styled from "styled-components";

function Home() {
  return (
    <>
      <div className="mx-auto h-screen bg-blanco-perla w-11/12 ">
        <InstagramFeed />
      </div>
      <div className="h-screen bg-red-200"></div>
      <div className="h-screen bg-blue-200"></div>
    </>
  );
}

export default Home;
