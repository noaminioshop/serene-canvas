export type SlideLayout =
  | 'title-slide'
  | 'two-column'
  | 'three-column-cards'
  | 'quote'
  | 'comparison-table'
  | 'full-image'
  | 'closing'
  | 'checklist';

export interface SlideColors {
  background: string;
  titleText: string;
  bodyText: string;
  accentColor: string;
}

export interface SlideContent {
  bodyText?: string;
  imageUrl?: string;
  bulletPoints?: string[];
  quoteText?: string;
  quoteAttribution?: string;
  cards?: { title: string; description: string; icon?: string }[];
  tableHeaders?: string[];
  tableRows?: string[][];
  contactInfo?: string[];
  checklistItems?: string[];
  videoUrl?: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  layout: SlideLayout;
  content: SlideContent;
  colors: SlideColors;
}

export interface PresentationState {
  slides: Slide[];
  currentSlideIndex: number;
  isDesignMode: boolean;
  isDarkMode: boolean;
}
