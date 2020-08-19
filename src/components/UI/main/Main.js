import React, { useState } from 'react';

const Main = ({ currFlat, currPic, setCurrPic }) => {
  let picIndex = 0;
  const prevPic = () => {
    if (picIndex === 0) {
      picIndex = currFlat.images.length - 1;
      setCurrPic(currFlat.images[picIndex]);
      console.log(picIndex);
    } else {
      picIndex--;
      setCurrPic(currFlat.images[picIndex]);
    }
  };
  const nextPic = () => {
    if (picIndex === currFlat.images.length) {
      picIndex = 0;
      setCurrPic(currFlat.images[picIndex]);
    } else {
      picIndex++;
      console.log(picIndex);

      setCurrPic(currFlat.images[picIndex]);
    }
  };
  return (
    <div className="main">
      <div className="image">
        <img src={currPic} alt="room" />
        <div className="playBtn">
          <div className="triangle"></div>
        </div>
        <div className="btnGroup">
          <div className="btn" onClick={() => prevPic()}>
            <i className="arrow left" />
          </div>
          <div className="btn" onClick={() => nextPic()}>
            <i className="arrow right" />
          </div>
        </div>
        <div className="backgroundForImg" />
      </div>
      <div className="aboutFlat">
        <div className="infoFlex">
          <div className="flatName">
            <div className="dot" />
            <h5>{currFlat.title} -</h5>
          </div>

          <div className="address">{currFlat.address}</div>
        </div>
        <div className="aboutRenovation">{currFlat.description}</div>
        <p className="counter">
          <span>{currFlat.images.indexOf(currPic) + 1}</span>/
          <span>{currFlat.images.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Main;
