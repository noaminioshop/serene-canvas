import { Sun, Moon, Pencil, Eye, Maximize, ChevronRight, ChevronLeft } from 'lucide-react';
import { usePresentation } from '@/context/PresentationContext';
import { motion } from 'framer-motion';

export function Toolbar() {
  const { isDarkMode, toggleDarkMode, isDesignMode, toggleDesignMode, currentSlideIndex, slides } = usePresentation();

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="h-14 flex items-center justify-between px-6 bg-card/80 backdrop-blur-xl border-b border-border/50 shrink-0">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-semibold text-foreground">עיצוב הבית</h1>
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {currentSlideIndex + 1} / {slides.length}
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={handleFullscreen}
          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          title="מסך מלא"
        >
          <Maximize size={18} />
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          title={isDarkMode ? 'מצב בהיר' : 'מצב כהה'}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
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
      </div>
    </div>
  );
}

export function SlideNavigation() {
  const { nextSlide, prevSlide, currentSlideIndex, slides } = usePresentation();
  return (
    <div className="h-14 flex items-center justify-between px-6 bg-card/80 backdrop-blur-xl border-t border-border/50 shrink-0">
      <button
        onClick={nextSlide}
        disabled={currentSlideIndex >= slides.length - 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground disabled:opacity-30 transition-colors text-sm font-medium"
      >
        הבא <ChevronLeft size={16} />
      </button>
      <button
        onClick={prevSlide}
        disabled={currentSlideIndex <= 0}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground disabled:opacity-30 transition-colors text-sm font-medium"
      >
        <ChevronRight size={16} /> הקודם
      </button>
    </div>
  );
}
