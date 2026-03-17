import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Slide, PresentationState } from '@/types/slides';
import { initialSlides } from '@/data/initialSlides';

interface PresentationContextType extends PresentationState {
  setCurrentSlideIndex: (i: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleDesignMode: () => void;
  toggleDarkMode: () => void;
  updateSlide: (id: number, updates: Partial<Slide>) => void;
  addSlide: (slide: Slide) => void;
  deleteSlide: (id: number) => void;
  currentSlide: Slide;
}

const PresentationContext = createContext<PresentationContextType | null>(null);

const STORAGE_KEY = 'serenity-presentation-slides';
const DARK_KEY = 'serenity-dark-mode';

function loadSlides(): Slide[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return initialSlides;
}

export function PresentationProvider({ children }: { children: React.ReactNode }) {
  const [slides, setSlides] = useState<Slide[]>(loadSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDesignMode, setIsDesignMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === 'true'; } catch { return false; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
  }, [slides]);

  useEffect(() => {
    localStorage.setItem(DARK_KEY, String(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(i => Math.min(i + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex(i => Math.max(i - 1, 0));
  }, []);

  const updateSlide = useCallback((id: number, updates: Partial<Slide>) => {
    setSlides(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  }, []);

  const addSlide = useCallback((slide: Slide) => {
    setSlides(prev => [...prev, slide]);
  }, []);

  const deleteSlide = useCallback((id: number) => {
    setSlides(prev => {
      const next = prev.filter(s => s.id !== id);
      if (next.length === 0) return prev;
      return next;
    });
    setCurrentSlideIndex(i => Math.min(i, slides.length - 2));
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex] || slides[0];

  return (
    <PresentationContext.Provider
      value={{
        slides,
        currentSlideIndex,
        isDesignMode,
        isDarkMode,
        setCurrentSlideIndex,
        nextSlide,
        prevSlide,
        toggleDesignMode: () => setIsDesignMode(p => !p),
        toggleDarkMode: () => setIsDarkMode(p => !p),
        updateSlide,
        addSlide,
        deleteSlide,
        currentSlide,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const ctx = useContext(PresentationContext);
  if (!ctx) throw new Error('usePresentation must be inside PresentationProvider');
  return ctx;
}
