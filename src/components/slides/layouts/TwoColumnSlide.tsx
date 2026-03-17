import { Slide } from '@/types/slides';

export function TwoColumnSlide({ slide }: { slide: Slide }) {
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ backgroundColor: slide.colors.background }}
    >
      <div className="px-20 pt-16 pb-8">
        <h2 className="font-bold" style={{ color: slide.colors.titleText }}>{slide.title}</h2>
        {slide.subtitle && (
          <p className="text-large mt-2" style={{ color: slide.colors.accentColor }}>{slide.subtitle}</p>
        )}
        <div className="w-20 h-1 rounded-full mt-4" style={{ backgroundColor: slide.colors.accentColor }} />
      </div>
      <div className="flex-1 flex gap-12 px-20 pb-16">
        <div className="flex-1 flex flex-col justify-center">
          {slide.content.bodyText && (
            <p className="mb-6" style={{ color: slide.colors.bodyText }}>{slide.content.bodyText}</p>
          )}
          {slide.content.bulletPoints && (
            <ul className="space-y-3 pr-6" style={{ color: slide.colors.bodyText }}>
              {slide.content.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: slide.colors.accentColor }} />
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {slide.content.imageUrl && (
          <div className="flex-1 flex items-center justify-center">
            <img
              src={slide.content.imageUrl}
              alt={slide.title}
              className="max-w-full max-h-full object-cover rounded-3xl shadow-xl"
              style={{ maxHeight: 600 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
