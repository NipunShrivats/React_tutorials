// we dont have loops in JSX, we use ".map()" method of arrays.
// .map() always require key property.

import React from "react";
import seriesData from "../../api/NetflixSeriesData.json";

export default function Main() {
  return (
    <>
      <ul>
        {seriesData.map((item, index) => {
          return (
            <li key={item.id} style={{ listStyle: "none" }}>
              <div>
                <img
                  src={item.img_url}
                  alt={item.name}
                  style={{ width: "10rem" }}
                />
              </div>
              <h2>Name: {item.name}</h2>
              <h3>Rating: {item.rating}</h3>
              <p>summary: {item.description}</p>
              <p>Gener: {item.genre}</p>
              <p>Cast: {item.cast}</p>
              <a href={item.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
