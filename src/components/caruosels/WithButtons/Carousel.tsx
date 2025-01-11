import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButtons';
import { Slide } from '../Simple';
import '../../../css/base.css';
import '../../../css/embla.css';

type PropType = {
  slides: Slide[];
  // eslint-disable-next-line react/require-default-props
  options?: EmblaOptionsType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function EmblaCarouselWithButtons(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
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
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <img
                loading="lazy"
                decoding="async"
                fetchPriority="high"
                className="embla__slide__img"
                src={slide.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
}

export default EmblaCarouselWithButtons;
