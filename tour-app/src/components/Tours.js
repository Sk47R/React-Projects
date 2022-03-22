import React from "react";
import style from "./Tours.module.css";

import Tour from "./Tour";

const Tours = (props) => {
  const tourList = props.tourData.map((data) => {
    return (
      <Tour
        image={data.image}
        destiny={data.destiny}
        price={data.price}
        key={data.id}
        id={data.id}
        description={data.description}
        removeTour={props.removeTour}
      ></Tour>
    );
  });

  if (props.tourData.length === 0) {
    return (
      <main className={style["no__tour"]}>
        <h1>No Tours Left</h1>
        <button onClick={props.refresh}>Refresh</button>
      </main>
    );
  }
  return (
    <div>
      <h1 className={style["tours__heading"]}>Our Tours</h1>
      <div className={style["tours__heading-border"]}></div>
      {tourList}
    </div>
  );
};

export default Tours;
