import { useState } from 'react';
import { Sun, Moon, Pencil, Eye, Maximize, ChevronRight, ChevronLeft, LayoutGrid, Settings, Lock, Unlock } from 'lucide-react';
import { usePresentation } from '@/context/PresentationContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'sonner';

interface ToolbarProps {
  onOpenThumbnails?: () => void;
  onOpenEditor?: () => void;
}

export function Toolbar({ onOpenThumbnails, onOpenEditor }: ToolbarProps) {
  const { isDarkMode, toggleDarkMode, isDesignMode, toggleDesignMode, currentSlideIndex, slides, isOwner, unlockEdit, lockEdit } = usePresentation();
  const isMobile = useIsMobile();
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleUnlock = async () => {
    if (!password) return;
    const success = await unlockEdit(password);
    if (success) {
      toast.success('נפתח לעריכה');
      setShowPasswordInput(false);
      setPassword('');
    } else {
      toast.error('סיסמה שגויה');
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
        {isOwner ? (
          <button onClick={lockEdit} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="נעל עריכה">
            <Unlock size={18} />
          </button>
        ) : showPasswordInput ? (
          <div className="flex items-center gap-1">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleUnlock()}
              placeholder="סיסמה"
              className="w-20 md:w-24 h-7 px-2 text-xs rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground"
              autoFocus
              dir="ltr"
            />
            <button onClick={handleUnlock} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground text-xs font-medium">
              ✓
            </button>
            <button onClick={() => { setShowPasswordInput(false); setPassword(''); }} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground text-xs">
              ✕
            </button>
          </div>
        ) : (
          <button onClick={() => setShowPasswordInput(true)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="פתח לעריכה">
            <Lock size={18} />
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
