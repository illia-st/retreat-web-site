import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import '../../../css/base.css';
import '../../../css/embla.css';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApiInner: EmblaCarouselType) => {
    setScrollSnaps(emblaApiInner.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApiInner: EmblaCarouselType) => {
    setSelectedIndex(emblaApiInner.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DotButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
