import { Slide } from '@/types/slides';

export function FullImageSlide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {slide.content.imageUrl && (
        <img
          src={slide.content.imageUrl}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-40">
        <h1 className="font-bold mb-6" style={{ color: slide.colors.titleText }}>
          {slide.title}
        </h1>
        {slide.subtitle && (
          <h2 className="font-light mb-8" style={{ color: slide.colors.bodyText }}>
            {slide.subtitle}
          </h2>
        )}
        {slide.content.bodyText && (
          <p className="text-large max-w-[1000px]" style={{ color: slide.colors.bodyText }}>
            {slide.content.bodyText}
          </p>
        )}
      </div>
    </div>
  );
}
