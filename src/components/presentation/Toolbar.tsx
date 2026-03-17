import { Sun, Moon, Pencil, Eye, Maximize, ChevronRight, ChevronLeft, LayoutGrid, Settings } from 'lucide-react';
import { usePresentation } from '@/context/PresentationContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface ToolbarProps {
  onOpenThumbnails?: () => void;
  onOpenEditor?: () => void;
}

export function Toolbar({ onOpenThumbnails, onOpenEditor }: ToolbarProps) {
  const { isDarkMode, toggleDarkMode, isDesignMode, toggleDesignMode, currentSlideIndex, slides, isOwner } = usePresentation();
  const isMobile = useIsMobile();

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="h-12 md:h-14 flex items-center justify-between px-3 md:px-6 bg-card/80 backdrop-blur-xl border-b border-border/50 shrink-0">
      <div className="flex items-center gap-2">
        <h1 className="text-xs md:text-sm font-semibold text-foreground truncate max-w-[100px] md:max-w-none">עיצוב הבית</h1>
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-medium">
        {currentSlideIndex + 1} / {slides.length}
      </div>
      <div className="flex items-center gap-0.5 md:gap-1">
        {isMobile && isOwner && onOpenThumbnails && (
          <button onClick={onOpenThumbnails} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="שקופיות">
            <LayoutGrid size={18} />
          </button>
        )}
        {isMobile && isOwner && onOpenEditor && (
          <button onClick={onOpenEditor} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="עריכה">
            <Settings size={18} />
          </button>
        )}
        <button onClick={handleFullscreen} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="מסך מלא">
          <Maximize size={18} />
        </button>
        <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title={isDarkMode ? 'מצב בהיר' : 'מצב כהה'}>
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        {!isMobile && isOwner && (
          <button
            onClick={toggleDesignMode}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title={isDesignMode ? 'מצב צפייה' : 'מצב עיצוב'}
            style={{
              color: isDesignMode ? 'hsl(var(--accent))' : undefined,
              backgroundColor: isDesignMode ? 'hsl(var(--accent) / 0.15)' : undefined,
            }}
          >
            {isDesignMode ? <Eye size={18} /> : <Pencil size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export function SlideNavigation() {
  const { nextSlide, prevSlide, currentSlideIndex, slides } = usePresentation();
  return (
    <div className="h-12 md:h-14 flex items-center justify-between px-4 md:px-6 bg-card/80 backdrop-blur-xl border-t border-border/50 shrink-0">
      <button
        onClick={prevSlide}
        disabled={currentSlideIndex <= 0}
        className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground disabled:opacity-30 transition-colors text-xs md:text-sm font-medium"
      >
        <ChevronRight size={16} /> הקודם
      </button>
      <div className="flex gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === currentSlideIndex ? 'bg-foreground' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        disabled={currentSlideIndex >= slides.length - 1}
        className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground disabled:opacity-30 transition-colors text-xs md:text-sm font-medium"
      >
        הבא <ChevronLeft size={16} />
      </button>
    </div>
  );
}
