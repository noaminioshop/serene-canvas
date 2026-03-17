import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PresentationProvider, usePresentation } from '@/context/PresentationContext';
import { ScaledSlide } from '@/components/slides/ScaledSlide';
import { SlideRenderer } from '@/components/slides/SlideRenderer';
import { Toolbar, SlideNavigation } from '@/components/presentation/Toolbar';
import { SlideThumbnails } from '@/components/presentation/SlideThumbnails';
import { SlideEditor } from '@/components/presentation/SlideEditor';

function PresentationView() {
  const { currentSlide, currentSlideIndex, nextSlide, prevSlide, isDesignMode } = usePresentation();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen flex flex-col overflow-hidden" dir="rtl">
      <Toolbar />
      <div className="flex-1 flex min-h-0">
        {isDesignMode && <SlideThumbnails />}
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
