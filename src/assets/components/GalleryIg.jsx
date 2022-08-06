import React, { useEffect, useState } from "react";
import axios from "axios";

function GalleryIg() {
  const appDiv = document.getElementById("app");

  let posts = "";
  fetch("https://www.instagram.com/kikesan.dev/?__a=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.graphql.user.edge_owner_to_timeline_media.edges.map((item) => {
        posts += `<a href="https://www.instagram.com/p/${item.node.shortcode}/" class="item">
            <img src="${item.node.thumbnail_src}" class="foto"/>
            <div class="info">
              <div class="likes">Likes: ${item.node.edge_liked_by.count}</div>
              <div class="comments"> Comments: ${item.node.edge_media_to_comment.count}</div></div>
            </div>
          </a>`;
      });

      appDiv.innerHTML = posts;
    });
  return <div id="app"></div>;
}

export default GalleryIg;
