import { Slide } from '@/types/slides';

export function FullImageSlide({ slide }: { slide: Slide }) {
  const allImages = [
    ...(slide.content.imageUrl ? [slide.content.imageUrl] : []),
    ...(slide.content.imageUrls || []),
  ].filter(Boolean);

  const hasText = slide.title || slide.subtitle || slide.content.bodyText;

  const getGridClass = (count: number) => {
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-3';
    if (count === 4) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start"
      style={{ backgroundColor: slide.colors.background, padding: '48px 60px' }}
    >
      {slide.title && (
        <h1 className="font-bold mb-4 text-center shrink-0" style={{ color: slide.colors.titleText }}>
          {slide.title}
        </h1>
      )}
      {slide.subtitle && (
        <h2 className="font-light mb-4 text-center shrink-0" style={{ color: slide.colors.accentColor }}>
          {slide.subtitle}
        </h2>
      )}
      {slide.content.bodyText && (
        <p className="mb-6 max-w-[1000px] text-center shrink-0" style={{ color: slide.colors.bodyText }}>
          {slide.content.bodyText}
        </p>
      )}
      {allImages.length > 0 && (
        <div
          className={`flex-1 w-full grid ${getGridClass(allImages.length)} gap-6 min-h-0`}
          style={{ maxWidth: allImages.length === 1 ? '1400px' : '1600px' }}
        >
          {allImages.map((url, i) => (
            <div key={i} className="flex items-center justify-center min-h-0 overflow-hidden">
              <img
                src={url}
                alt={`${slide.title} ${i + 1}`}
                className="object-contain rounded-2xl"
                style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}