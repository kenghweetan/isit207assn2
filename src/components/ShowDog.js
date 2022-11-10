import React from "react";

import Resource from "./Resource";

const ShowDog = () => {
  const webURL =
    "https://api.theDogapi.com/v1/images/search/?limit=15&page=100&order=DESC";

  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return data.trans.map((Dog) => (
      <div key={Dog.id}>
        <img className="image" src={Dog.url} alt="Dog img" />
      </div>
    ));
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

export default ShowDog;
