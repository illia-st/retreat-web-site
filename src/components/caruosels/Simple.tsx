/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import '../../css/base.css';
import '../../css/embla.css';

export interface Slide {
  image: string;
  maxHeight: number;
  maxWidth: number;
}

type PropType = {
  slides: Slide[];
  options: EmblaOptionsType;
};

const EmblaCarouselSimple: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              style={{
                maxHeight: slide.maxHeight,
                maxWidth: slide.maxWidth,
                height: 'auto',
                width: 'auto',
              }}
              key={index}
            >
              <img
                loading="lazy"
                decoding="async"
                fetchPriority="high"
                className="embla__slide__img"
                src={slide.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselSimple;
