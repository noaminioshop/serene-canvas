import { Slide } from '@/types/slides';

export function FullImageSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start pt-16 px-40"
      style={{ backgroundColor: slide.colors.background }}
    >
      <h1 className="font-bold mb-4 text-center" style={{ color: slide.colors.titleText }}>
        {slide.title}
      </h1>
      {slide.subtitle && (
        <h2 className="font-light mb-4 text-center" style={{ color: slide.colors.accentColor }}>
          {slide.subtitle}
        </h2>
      )}
      {slide.content.bodyText && (
        <p className="mb-6 max-w-[1000px] text-center" style={{ color: slide.colors.bodyText }}>
          {slide.content.bodyText}
        </p>
      )}
      {slide.content.imageUrl && (
        <div className="flex-1 w-full max-w-[1200px] overflow-hidden rounded-3xl mb-12">
          <img
            src={slide.content.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
