import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { Slide, PresentationState } from '@/types/slides';
import { initialSlides } from '@/data/initialSlides';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

interface PresentationContextType extends PresentationState {
  presentationId: string | null;
  isOwner: boolean;
  loading: boolean;
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

const DARK_KEY = 'serenity-dark-mode';

export function PresentationProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [presentationId, setPresentationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDesignMode, setIsDesignMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === 'true'; } catch { return false; }
  });
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load presentation from DB
  useEffect(() => {
    loadPresentation();
  }, [user]);

  async function loadPresentation() {
    setLoading(true);
    try {
      // Try to get the first presentation (we'll use a single-presentation model)
      const { data, error } = await supabase
        .from('presentations')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPresentationId(data.id);
        setSlides(data.slides as unknown as Slide[]);
      } else if (user) {
        // Create initial presentation for this user
        const { data: newPres, error: insertErr } = await supabase
          .from('presentations')
          .insert({
            user_id: user.id,
            title: 'עיצוב הבית: שלווה ושלום',
            slides: initialSlides as unknown as any,
          })
          .select()
          .single();

        if (insertErr) throw insertErr;
        if (newPres) {
          setPresentationId(newPres.id);
          setSlides(newPres.slides as unknown as Slide[]);
        }
      }
    } catch (err: any) {
      console.error('Failed to load presentation:', err);
    } finally {
      setLoading(false);
    }
  }

  // Save slides to DB with debounce
  const saveToDb = useCallback((newSlides: Slide[]) => {
    if (!presentationId || !user) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const { error } = await supabase
        .from('presentations')
        .update({ slides: newSlides as unknown as any })
        .eq('id', presentationId);
      if (error) {
        console.error('Save error:', error);
        toast.error('שגיאה בשמירה');
      }
    }, 800);
  }, [presentationId, user]);

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
    setSlides(prev => {
      const next = prev.map(s => s.id === id ? { ...s, ...updates } : s);
      saveToDb(next);
      return next;
    });
  }, [saveToDb]);

  const addSlide = useCallback((slide: Slide) => {
    setSlides(prev => {
      const next = [...prev, slide];
      saveToDb(next);
      return next;
    });
  }, [saveToDb]);

  const deleteSlide = useCallback((id: number) => {
    setSlides(prev => {
      const next = prev.filter(s => s.id !== id);
      if (next.length === 0) return prev;
      saveToDb(next);
      return next;
    });
    setCurrentSlideIndex(i => Math.min(i, slides.length - 2));
  }, [slides.length, saveToDb]);

  const isOwner = !!(user && presentationId);
  const currentSlide = slides[currentSlideIndex] || slides[0];

  return (
    <PresentationContext.Provider
      value={{
        slides,
        currentSlideIndex,
        isDesignMode,
        isDarkMode,
        presentationId,
        isOwner,
        loading,
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
