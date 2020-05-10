import React from 'react';
import Proptypes from 'prop-types'

function Tesla({ name, image, price }) {
  return (
  <div>
    <h2>{name} : ${price}</h2>
    <img src={image} alt={name}/>
  </div>
  )
}

Tesla.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired
};

const TESLA_API = [
  {
    id: 1,
    name: "Tesla Model S",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg?crop=0.663xw:0.795xh;0.0929xw,0.205xh&resize=2048:*",
    price: 100_000
  },
  {
    id: 2,
    name: "Tesla Model X",
    image: "https://www.tesla.com/sites/tesla/files/curatedmedia/performance-hero%402.jpg",
    price: 120_000
  },
  {
    id: 3,
    name: "Tesla Model 3",
    image: "https://www.tesla.com/sites/default/files/model3-new/hero/model-3-hero-desktop-v2.jpg",
    price: 50_000
  },
  {
    id: 4,
    name: "Tesla Model Y",
    image: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-y-social.png",
    price: 60_000
  }
];

function renderTesla(model) {
  return <Tesla key={model.id} name={model.name} image={model.image} price={model.price} />
}

function App() {
  return (
    <div className="App">
      <h1>TESLA Line-up</h1>
      {TESLA_API.map(renderTesla)}
    </div>
  );
}

export default App;
