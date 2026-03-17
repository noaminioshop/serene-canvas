import { Slide } from '@/types/slides';

export function TitleSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center px-40"
      style={{ backgroundColor: slide.colors.background }}
    >
      <h1
        className="font-bold mb-8"
        style={{ color: slide.colors.titleText }}
      >
        {slide.title}
      </h1>
      <div
        className="w-32 h-1 rounded-full mb-8"
        style={{ backgroundColor: slide.colors.accentColor }}
      />
      {slide.subtitle && (
        <h2
          className="font-light"
          style={{ color: slide.colors.bodyText }}
        >
          {slide.subtitle}
        </h2>
      )}
    </div>
  );
}
