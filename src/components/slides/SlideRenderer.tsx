import { Slide } from '@/types/slides';
import { TitleSlide } from './layouts/TitleSlide';
import { TwoColumnSlide } from './layouts/TwoColumnSlide';
import { ThreeColumnCardsSlide } from './layouts/ThreeColumnCardsSlide';
import { QuoteSlide } from './layouts/QuoteSlide';
import { ComparisonTableSlide } from './layouts/ComparisonTableSlide';
import { FullImageSlide } from './layouts/FullImageSlide';
import { ClosingSlide } from './layouts/ClosingSlide';

export function SlideRenderer({ slide }: { slide: Slide }) {
  const layoutMap: Record<string, React.FC<{ slide: Slide }>> = {
    'title-slide': TitleSlide,
    'two-column': TwoColumnSlide,
    'three-column-cards': ThreeColumnCardsSlide,
    'quote': QuoteSlide,
    'comparison-table': ComparisonTableSlide,
    'full-image': FullImageSlide,
    'closing': ClosingSlide,
  };

  const Layout = layoutMap[slide.layout] || TitleSlide;
  return <Layout slide={slide} />;
}
