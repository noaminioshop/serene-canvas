import { usePresentation } from '@/context/PresentationContext';
import { SlideLayout } from '@/types/slides';
import { ScaledSlide } from '@/components/slides/ScaledSlide';
import { SlideRenderer } from '@/components/slides/SlideRenderer';

const layoutOptions: { value: SlideLayout; label: string }[] = [
  { value: 'title-slide', label: 'שקופית כותרת' },
  { value: 'two-column', label: 'שתי עמודות' },
  { value: 'three-column-cards', label: 'שלושה כרטיסים' },
  { value: 'quote', label: 'ציטוט' },
  { value: 'comparison-table', label: 'טבלת השוואה' },
  { value: 'full-image', label: 'תמונה מלאה' },
  { value: 'closing', label: 'סיום' },
  { value: 'checklist', label: 'צ\'קליסט' },
];

export function SlideEditor({ mobile }: { mobile?: boolean }) {
  const { currentSlide, updateSlide } = usePresentation();
  const slide = currentSlide;

  const update = (field: string, value: any) => {
    updateSlide(slide.id, { [field]: value });
  };

  const updateContent = (field: string, value: any) => {
    updateSlide(slide.id, { content: { ...slide.content, [field]: value } });
  };

  const updateColor = (field: string, value: string) => {
    updateSlide(slide.id, { colors: { ...slide.colors, [field]: value } });
  };

  const inputClass = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-xs font-medium text-muted-foreground mb-1";

  const content = (
    <div className={`${mobile ? 'p-4' : 'flex-1 overflow-y-auto p-4'} space-y-4`}>
      <div>
        <label className={labelClass}>כותרת</label>
        <input className={inputClass} value={slide.title} onChange={e => update('title', e.target.value)} dir="rtl" />
      </div>
      <div>
        <label className={labelClass}>כותרת משנה</label>
        <input className={inputClass} value={slide.subtitle || ''} onChange={e => update('subtitle', e.target.value)} dir="rtl" />
      </div>
      <div>
        <label className={labelClass}>תבנית</label>
        <select className={inputClass} value={slide.layout} onChange={e => update('layout', e.target.value)} dir="rtl">
          {layoutOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={labelClass}>טקסט גוף</label>
        <textarea className={`${inputClass} min-h-[80px]`} value={slide.content.bodyText || ''} onChange={e => updateContent('bodyText', e.target.value)} dir="rtl" />
      </div>
      <div>
        <label className={labelClass}>קישור לתמונה</label>
        <input className={inputClass} value={slide.content.imageUrl || ''} onChange={e => updateContent('imageUrl', e.target.value)} dir="ltr" />
      </div>
      {slide.layout === 'full-image' && (
        <div>
          <label className={labelClass}>תמונות נוספות (שורה לכל קישור)</label>
          <textarea className={`${inputClass} min-h-[80px]`} value={(slide.content.imageUrls || []).join('\n')} onChange={e => updateContent('imageUrls', e.target.value.split('\n').filter(Boolean))} dir="ltr" placeholder="https://example.com/image2.jpg&#10;https://example.com/image3.jpg" />
        </div>
      )}
      <div>
        <label className={labelClass}>נקודות (שורה לכל נקודה)</label>
        <textarea className={`${inputClass} min-h-[80px]`} value={(slide.content.bulletPoints || []).join('\n')} onChange={e => updateContent('bulletPoints', e.target.value.split('\n'))} dir="rtl" />
      </div>
      {slide.layout === 'checklist' && (
        <div>
          <label className={labelClass}>פריטים בצ'קליסט (שורה לכל פריט)</label>
          <textarea className={`${inputClass} min-h-[120px]`} value={(slide.content.checklistItems || []).join('\n')} onChange={e => updateContent('checklistItems', e.target.value.split('\n'))} dir="rtl" />
        </div>
      )}
      <div>
        <label className={labelClass}>קישור לסרטון (YouTube / Vimeo)</label>
        <input className={inputClass} value={slide.content.videoUrl || ''} onChange={e => updateContent('videoUrl', e.target.value)} dir="ltr" placeholder="https://www.youtube.com/embed/..." />
      </div>
      {slide.layout === 'quote' && (
        <>
          <div>
            <label className={labelClass}>ציטוט</label>
            <textarea className={`${inputClass} min-h-[80px]`} value={slide.content.quoteText || ''} onChange={e => updateContent('quoteText', e.target.value)} dir="rtl" />
          </div>
          <div>
            <label className={labelClass}>ייחוס</label>
            <input className={inputClass} value={slide.content.quoteAttribution || ''} onChange={e => updateContent('quoteAttribution', e.target.value)} dir="rtl" />
          </div>
        </>
      )}
      <div className="space-y-2">
        <label className={`${labelClass} mb-2`}>צבעים</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'background', label: 'רקע' },
            { key: 'titleText', label: 'כותרת' },
            { key: 'bodyText', label: 'טקסט' },
            { key: 'accentColor', label: 'הדגשה' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2">
              <input type="color" value={(slide.colors as any)[key]} onChange={e => updateColor(key, e.target.value)} className="w-8 h-8 rounded-lg border border-border cursor-pointer" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (mobile) return content;

  return (
    <div className="w-80 bg-card border-r border-border/50 flex flex-col shrink-0">
      <div className="p-4 border-b border-border/50">
        <h3 className="text-sm font-semibold text-foreground">עריכת שקופית</h3>
      </div>
      {content}
      <div className="p-3 border-t border-border/50">
        <p className="text-[10px] text-muted-foreground mb-2 text-center">תצוגה מקדימה</p>
        <div className="aspect-video rounded-lg overflow-hidden border border-border/50">
          <ScaledSlide>
            <SlideRenderer slide={slide} />
          </ScaledSlide>
        </div>
      </div>
    </div>
  );
}
