import { Slide } from '@/types/slides';

export function ThreeColumnCardsSlide({ slide }: { slide: Slide }) {
  const cards = slide.content.cards || [];
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
        <div className="w-20 h-1 rounded-full mt-4 mx-auto" style={{ backgroundColor: slide.colors.accentColor }} />
      </div>
      <div className="flex-1 flex items-center justify-center gap-12 px-20 pb-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-1 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: `${slide.colors.accentColor}15`,
              border: `2px solid ${slide.colors.accentColor}30`,
            }}
          >
            {card.icon && <span className="text-[64px] mb-6">{card.icon}</span>}
            <h3 className="font-semibold mb-4" style={{ color: slide.colors.titleText }}>{card.title}</h3>
            <p style={{ color: slide.colors.bodyText }}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
