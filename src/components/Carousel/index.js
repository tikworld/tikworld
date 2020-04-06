import React, { useState } from 'react';
import {
  Carousel as ReactCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './style.css';
import items from './carousel_items.json'; // load the carousel items a meta data for the Reactstrap Carousel.

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          className="d-block w-100"
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          className="text-white"
          captionText={item.caption}
          captionHeader={item.captionHeader}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <ReactCarousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride="carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
