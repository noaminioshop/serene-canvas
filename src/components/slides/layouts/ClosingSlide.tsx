import { Slide } from '@/types/slides';

export function ClosingSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center px-40"
      style={{ backgroundColor: slide.colors.background }}
    >
      <h1 className="font-bold mb-6" style={{ color: slide.colors.titleText }}>
        {slide.title}
      </h1>
      {slide.subtitle && (
        <h2 className="font-light mb-8" style={{ color: slide.colors.accentColor }}>
          {slide.subtitle}
        </h2>
      )}
      <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: slide.colors.accentColor }} />
      {slide.content.bodyText && (
        <p className="mb-8 max-w-[900px]" style={{ color: slide.colors.bodyText }}>
          {slide.content.bodyText}
        </p>
      )}
      {slide.content.contactInfo && (
        <div className="space-y-2 mt-4">
          {slide.content.contactInfo.map((info, i) => (
            <p key={i} className="text-small" style={{ color: slide.colors.bodyText }}>{info}</p>
          ))}
        </div>
      )}
    </div>
  );
}
