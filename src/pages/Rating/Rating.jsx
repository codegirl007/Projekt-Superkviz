import React, { useEffect, useState } from "react";

export const Rating = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="topscore">
        <h2 className="topscore__title">Žebříček nejlepších</h2>

        <ul className="topscore__list">
          {data?.map((rating) => (
            <li className="topscore__item" key={rating.name}>
              <span className="topscore__name">{rating.name}</span>
              <span className="topscore__score">{rating.score} bodů</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
