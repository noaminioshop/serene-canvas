import { Slide } from '@/types/slides';

export function FullImageSlide({ slide }: { slide: Slide }) {
  // Combine single imageUrl and imageUrls array
  const allImages = [
    ...(slide.content.imageUrl ? [slide.content.imageUrl] : []),
    ...(slide.content.imageUrls || []),
  ].filter(Boolean);

  const getGridClass = (count: number) => {
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-3';
    if (count === 4) return 'grid-cols-2';
    return 'grid-cols-3';
  };

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
      {allImages.length > 0 && (
        <div className={`flex-1 w-full max-w-[1400px] grid ${getGridClass(allImages.length)} gap-6 mb-12`}>
          {allImages.map((url, i) => (
            <div key={i} className="overflow-hidden rounded-3xl flex items-center justify-center">
              <img
                src={url}
                alt={`${slide.title} ${i + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}