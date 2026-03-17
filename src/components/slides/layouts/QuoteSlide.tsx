import { Slide } from '@/types/slides';

export function QuoteSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-40 text-center"
      style={{ backgroundColor: slide.colors.background }}
    >
      <h2 className="font-bold mb-12" style={{ color: slide.colors.titleText }}>{slide.title}</h2>
      <div className="relative max-w-[1200px]">
        <span className="absolute -top-16 -right-8 text-[120px] leading-none opacity-20" style={{ color: slide.colors.accentColor }}>״</span>
        <p className="text-quote" style={{ color: slide.colors.bodyText }}>
          {slide.content.quoteText}
        </p>
        <span className="absolute -bottom-16 -left-8 text-[120px] leading-none opacity-20 rotate-180" style={{ color: slide.colors.accentColor }}>״</span>
      </div>
      {slide.content.quoteAttribution && (
        <p className="mt-12 text-large font-medium" style={{ color: slide.colors.accentColor }}>
          — {slide.content.quoteAttribution}
        </p>
      )}
    </div>
  );
}
