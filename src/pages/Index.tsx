import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PresentationProvider, usePresentation } from '@/context/PresentationContext';
import { ScaledSlide } from '@/components/slides/ScaledSlide';
import { SlideRenderer } from '@/components/slides/SlideRenderer';
import { Toolbar, SlideNavigation } from '@/components/presentation/Toolbar';
import { SlideThumbnails } from '@/components/presentation/SlideThumbnails';
import { SlideEditor } from '@/components/presentation/SlideEditor';
import { useIsMobile } from '@/hooks/use-mobile';
import { X, LayoutGrid, Settings } from 'lucide-react';

function MobileThumbnailsDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex" dir="rtl">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-72 max-w-[80vw] h-full bg-card shadow-xl animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-3 border-b border-border/50">
          <span className="text-sm font-semibold text-foreground">שקופיות</span>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted"><X size={18} /></button>
        </div>
        <div className="h-[calc(100%-49px)] overflow-hidden">
          <SlideThumbnails />
        </div>
      </div>
    </div>
  );
}

function MobileEditorDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end" dir="rtl">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-h-[75vh] bg-card rounded-t-2xl shadow-xl animate-in slide-in-from-bottom overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-border/50">
          <span className="text-sm font-semibold text-foreground">עריכה</span>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted"><X size={18} /></button>
        </div>
        <div className="overflow-y-auto max-h-[calc(75vh-49px)]">
          <SlideEditor mobile />
        </div>
      </div>
    </div>
  );
}

function PresentationView() {
  const { currentSlide, currentSlideIndex, nextSlide, prevSlide, isDesignMode, isOwner, loading } = usePresentation();
  const isMobile = useIsMobile();
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextSlide, prevSlide]);

  // Touch swipe for mobile
  useEffect(() => {
    if (!isMobile) return;
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) prevSlide(); // swipe right = prev (RTL)
        else nextSlide(); // swipe left = next
      }
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isMobile, nextSlide, prevSlide]);

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col overflow-hidden" dir="rtl">
        <Toolbar
          onOpenThumbnails={() => setShowThumbnails(true)}
          onOpenEditor={() => setShowEditor(true)}
        />
        <div className="flex-1 flex items-center justify-center bg-muted/30 p-3 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
            >
              <ScaledSlide>
                <SlideRenderer slide={currentSlide} />
              </ScaledSlide>
            </motion.div>
          </AnimatePresence>
        </div>
        <SlideNavigation />
        <MobileThumbnailsDrawer open={showThumbnails} onClose={() => setShowThumbnails(false)} />
        <MobileEditorDrawer open={showEditor} onClose={() => setShowEditor(false)} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden" dir="rtl">
      <Toolbar />
      <div className="flex-1 flex min-h-0">
        {isDesignMode && isOwner && <SlideThumbnails />}
        <div className="flex-1 flex items-center justify-center bg-muted/30 p-4 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl"
            >
              <ScaledSlide>
                <SlideRenderer slide={currentSlide} />
              </ScaledSlide>
            </motion.div>
          </AnimatePresence>
        </div>
        {isDesignMode && <SlideEditor />}
      </div>
      <SlideNavigation />
    </div>
  );
}

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationView />
    </PresentationProvider>
  );
}
