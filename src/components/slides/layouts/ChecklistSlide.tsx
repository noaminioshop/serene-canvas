import { Slide } from '@/types/slides';

export function ChecklistSlide({ slide }: { slide: Slide }) {
  const items = slide.content.checklistItems || [];
  const midpoint = Math.ceil(items.length / 2);
  const col1 = items.slice(0, midpoint);
  const col2 = items.slice(midpoint);

  return (
    <div
      className="w-full h-full flex flex-col px-32 py-20"
      style={{ backgroundColor: slide.colors.background }}
    >
      <h1 className="font-bold mb-2 text-center" style={{ color: slide.colors.titleText }}>
        {slide.title}
      </h1>
      {slide.subtitle && (
        <h2 className="font-light mb-6 text-center" style={{ color: slide.colors.accentColor }}>
          {slide.subtitle}
        </h2>
      )}
      <div className="w-20 h-1 rounded-full mx-auto mb-10" style={{ backgroundColor: slide.colors.accentColor }} />
      <div className="flex-1 grid grid-cols-2 gap-x-16 gap-y-1 items-start" dir="rtl">
        <div className="space-y-3">
          {col1.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="w-7 h-7 rounded-md border-2 mt-1 shrink-0 flex items-center justify-center"
                style={{ borderColor: slide.colors.accentColor }}
              >
                <span style={{ color: slide.colors.accentColor, fontSize: 18 }}>✓</span>
              </div>
              <p className="leading-relaxed" style={{ color: slide.colors.bodyText, fontSize: 26 }}>{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {col2.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="w-7 h-7 rounded-md border-2 mt-1 shrink-0 flex items-center justify-center"
                style={{ borderColor: slide.colors.accentColor }}
              >
                <span style={{ color: slide.colors.accentColor, fontSize: 18 }}>✓</span>
              </div>
              <p className="leading-relaxed" style={{ color: slide.colors.bodyText, fontSize: 26 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
