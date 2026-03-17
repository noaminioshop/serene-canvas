import { usePresentation } from '@/context/PresentationContext';
import { ScaledSlide } from '@/components/slides/ScaledSlide';
import { SlideRenderer } from '@/components/slides/SlideRenderer';
import { Plus, Trash2 } from 'lucide-react';
import { SlideLayout } from '@/types/slides';

export function SlideThumbnails() {
  const { slides, currentSlideIndex, setCurrentSlideIndex, addSlide, deleteSlide } = usePresentation();

  const handleAddSlide = () => {
    const newId = Math.max(...slides.map(s => s.id)) + 1;
    addSlide({
      id: newId,
      title: 'שקופית חדשה',
      subtitle: '',
      layout: 'title-slide' as SlideLayout,
      content: {},
      colors: {
        background: '#f5f5f0',
        titleText: '#2c3e50',
        bodyText: '#4a4a4a',
        accentColor: '#8fad88',
      },
    });
    setCurrentSlideIndex(slides.length);
  };

  return (
    <div className="w-56 bg-card border-l border-border/50 flex flex-col shrink-0">
      <div className="p-3 flex gap-2 border-b border-border/50">
        <button
          onClick={handleAddSlide}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground text-xs font-medium transition-colors"
        >
          <Plus size={14} /> הוסף
        </button>
        <button
          onClick={() => deleteSlide(slides[currentSlideIndex]?.id)}
          disabled={slides.length <= 1}
          className="flex items-center justify-center px-3 py-2 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive disabled:opacity-30 text-xs transition-colors"
        >
          <Trash2 size={14} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlideIndex(i)}
            className={`w-full rounded-xl overflow-hidden border-2 transition-all ${
              i === currentSlideIndex
                ? 'border-accent shadow-lg'
                : 'border-transparent hover:border-border'
            }`}
          >
            <div className="aspect-video relative">
              <ScaledSlide>
                <SlideRenderer slide={slide} />
              </ScaledSlide>
            </div>
            <div className="px-2 py-1 text-[10px] text-muted-foreground text-center truncate">
              {i + 1}. {slide.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
