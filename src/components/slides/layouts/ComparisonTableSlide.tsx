import { Slide } from '@/types/slides';

export function ComparisonTableSlide({ slide }: { slide: Slide }) {
  const headers = slide.content.tableHeaders || [];
  const rows = slide.content.tableRows || [];
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ backgroundColor: slide.colors.background }}
    >
      <div className="px-20 pt-16 pb-6 text-center">
        <h2 className="font-bold" style={{ color: slide.colors.titleText }}>{slide.title}</h2>
        {slide.subtitle && (
          <p className="text-large mt-2" style={{ color: slide.colors.accentColor }}>{slide.subtitle}</p>
        )}
      </div>
      <div className="flex-1 flex items-center justify-center px-20 pb-16">
        <div className="w-full max-w-[1400px] rounded-3xl overflow-hidden" style={{ border: `2px solid ${slide.colors.accentColor}70` }}>
          <div className="grid" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
            {headers.map((h, i) => (
              <div key={i} className="px-8 py-6 font-bold text-center" style={{ backgroundColor: slide.colors.accentColor, color: '#fff', fontSize: 30 }}>
                {h}
              </div>
            ))}
            {rows.map((row, ri) => (
              row.map((cell, ci) => (
                <div
                  key={`${ri}-${ci}`}
                  className="px-8 py-5 text-center"
                  style={{
                    backgroundColor: ri % 2 === 0 ? `${slide.colors.accentColor}10` : 'transparent',
                    color: slide.colors.bodyText,
                    fontSize: 26,
                    borderBottom: `1px solid ${slide.colors.accentColor}20`,
                  }}
                >
                  {cell}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
