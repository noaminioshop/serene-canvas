import { Slide } from '@/types/slides';

const defaultColors = {
  background: '#F0E8D8',
  titleText: '#2C3E50',
  bodyText: '#34495E',
  accentColor: '#8FAD88',
};

// Warm background variations for visual variety
const warmBg1 = '#E8EDDF'; // soft sage green
const warmBg2 = '#F2E8DA'; // warm cream
const warmBg3 = '#E4DFCF'; // warm linen
const warmBg4 = '#DDE8D6'; // light mint green
const warmBg5 = '#EDE3D0'; // sandy warm
const warmBg6 = '#E0E8DB'; // pale olive green

export const initialSlides: Slide[] = [
  // SLIDE 1 - Title Slide (with video placeholder)
  {
    id: 1,
    title: 'עיצוב הבית: שלווה ושלום',
    subtitle: 'יצירת מרחב המזין את הנפש והרוח',
    layout: 'title-slide',
    content: {
      videoUrl: '', // הוסיפי כאן קישור לסרטון מוטמע (YouTube embed URL)
    },
    colors: { ...defaultColors, background: warmBg3, bodyText: '#7F8C8D' },
  },
  // SLIDE 2 - The Serenity Prayer
  {
    id: 2,
    title: 'ההשראה: תפילת השלווה',
    layout: 'quote',
    content: {
      quoteText: 'אלי, תן בי את השלווה לקבל את הדברים שאין ביכולתי לשנותם, אומץ לשנות את הדברים אשר ביכולתי, ותבונה להבחין בין השניים',
      quoteAttribution: 'ריינהולד ניבור, 1932',
    },
    colors: { ...defaultColors, background: warmBg1 },
  },
  // SLIDE 3 - The Home as an Anchor of Quiet
  {
    id: 3,
    title: 'הבית כעוגן של שקט',
    layout: 'two-column',
    content: {
      bodyText: 'הבית שלנו הוא הרבה יותר מארבעה קירות. הוא השתקפות של עולמנו הפנימי והמקום בו אנו נטענים באנרגיה.',
      bulletPoints: [
        'יצירת סדר חיצוני התומך בסדר פנימי',
        'הפחתת גירויים חזותיים המייצרים סטרס',
        'הפיכת כל חדר להזדמנות למיינדפולנס',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    },
    colors: { ...defaultColors, background: warmBg2 },
  },
  // SLIDE 4 - A Calming Color Palette
  {
    id: 4,
    title: 'פלטת צבעים מרגיעה',
    layout: 'three-column-cards',
    content: {
      cards: [
        {
          title: 'כחול אפרפר רך',
          description: 'מזכיר את השמיים והים, משרה שלווה עמוקה ותחושת ביטחון',
          icon: '🩵',
        },
        {
          title: 'ירוק מרווה',
          description: 'חיבור לטבע, צמיחה וריפוי. צבע המוריד את הדופק ומרגיע את העין',
          icon: '🌿',
        },
        {
          title: 'גוני שמנת ואוף-וויט',
          description: 'יוצרים תחושת מרחב, ניקיון וטוהר ללא קרירות של לבן בוהק',
          icon: '🤍',
        },
      ],
    },
    colors: { ...defaultColors, background: warmBg3, bodyText: '#7F8C8D' },
  },
  // SLIDE 5 - Bringing Nature Home
  {
    id: 5,
    title: 'להכניס את הטבע הביתה',
    subtitle: 'עיצוב ביופיליי',
    layout: 'two-column',
    content: {
      bodyText: 'הצורך המולד שלנו להתחבר לטבע. מחקרים מוכיחים כי שהייה בקרבת צמחייה מפחיתה רמות קורטיזול (הורמון הסטרס).',
      bulletPoints: [
        '🌱 צמחיית פנים לסינון אוויר ואנרגיה',
        '🌊 אלמנט מים זורמים לצליל מרגיע',
        '🏔️ שימוש באבנים וחלוקי נחל',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=800',
    },
    colors: { ...defaultColors, background: warmBg4 },
  },
  // SLIDE 6 - Natural Light and Atmosphere
  {
    id: 6,
    title: 'אור טבעי ואווירה',
    layout: 'three-column-cards',
    content: {
      cards: [
        {
          title: 'אש חמה',
          description: 'נרות או קמין המייצרים חוויית \'היגה\' והמסיסות עוטפת',
          icon: '🔥',
        },
        {
          title: 'תאורה שכבתית',
          description: 'שימוש במנורות עומד, שולחן וקיר במקום תאורה מרכזית חזקה',
          icon: '💡',
        },
        {
          title: 'אור יום טבעי',
          description: 'מיקסום כניסת אור השמש לוויסות השעון הביולוגי ומצב הרוח',
          icon: '☀️',
        },
      ],
    },
    colors: { ...defaultColors, background: warmBg1, bodyText: '#7F8C8D' },
  },
  // SLIDE 7 - Less is More
  {
    id: 7,
    title: 'פחות זה יותר',
    subtitle: 'סדר חיצוני = שקט פנימי',
    layout: 'two-column',
    content: {
      bodyText: 'עומס ויזואלי יוצר רעש במוח. תהליך הדקלאטרינג (פינוי חפצים) הוא אקט של שחרור נפשי.',
      bulletPoints: [
        'שמרו על משטחים פנויים',
        'אחסון סגור להסתרת \'רעש\'',
        'השאירו מקום לריק (White Space)',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    },
    colors: { ...defaultColors, background: warmBg2 },
  },
  // SLIDE 8 - Materials and Textures from Nature
  {
    id: 8,
    title: 'חומרים וטקסטורות מהטבע',
    layout: 'three-column-cards',
    content: {
      cards: [
        {
          title: 'חימר ואבן',
          description: 'חומרים נושמים המתייפים עם הזמן',
          icon: '🪨',
        },
        {
          title: 'עץ גולמי',
          description: 'חום טבעי, מרקם ייחודי ותחושת חיבור לטבע',
          icon: '🪵',
        },
        {
          title: 'טקסטיל טבעי',
          description: 'כותנה, פשתן וצמר למגע נעים ומלטף',
          icon: '🧶',
        },
      ],
    },
    colors: { ...defaultColors, background: warmBg3, bodyText: '#7F8C8D' },
  },
  // SLIDE 9 - The Personal Retreat Corner
  {
    id: 9,
    title: 'פינת המפלט האישית',
    subtitle: 'ה\'מקדש\' הקטן שלכם',
    layout: 'two-column',
    content: {
      bodyText: 'הקצו פינה אחת בבית המיועדת אך ורק למנוחה, קריאה או מדיטציה. ללא מסיחים, ללא הפרעות.',
      bulletPoints: [
        '❤️ פריטים בעלי ערך סנטימנטלי חיובי',
        '🪑 כורסה נוחה במיוחד או פופים',
        '📖 ספרים מעוררי השראה',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    },
    colors: { ...defaultColors, background: warmBg4 },
  },
  // SLIDE 10 - Design for All the Senses
  {
    id: 10,
    title: 'עיצוב לכל החושים',
    layout: 'three-column-cards',
    content: {
      cards: [
        {
          title: 'מגע (Tactile)',
          description: 'שכבות של שמיכות וכריות ומרקמים שונים המייצרים תחושת הגנה',
          icon: '🤲',
        },
        {
          title: 'צליל (Auditory)',
          description: 'מוזיקה שקטה, רעש לבן או שקט מוחלט בחדר השינה',
          icon: '🎵',
        },
        {
          title: 'ריח (Olfactory)',
          description: 'שמנים אתריים של לבנדר או אקליפטוס להרגעה מיידית',
          icon: '🌬️',
        },
      ],
    },
    colors: { ...defaultColors, background: warmBg1, bodyText: '#7F8C8D' },
  },
  // SLIDE 11 - Morning Routine Checklist
  {
    id: 11,
    title: 'שגרת הבוקר של המלכה ⚜️',
    subtitle: 'הטיפים שלי לבית מסודר ומלא אנרגיה',
    layout: 'checklist' as const,
    content: {
      checklistItems: [
        'לקום בבוקר להודות, לסדר את המיטה',
        'נכנסים לצחצח, לאסוף בגדים ושערות, שירותים נקיים',
        'לעבור למטבח – משטח נקי, אח״כ כיור',
        'שולחנות בלי כלים, משטחים פנויים',
        'ריצפה פנויה – ככה לנקות זה הרבה יותר קל',
        'לפתוח חלונות, לאוורר את הבית, שהשמש תיכנס',
        'להפעיל מוזיקה נעימה ומשמחת',
        'להשקות עציצים',
        'ספה מסודרת, לנער כריות',
        'למלא מה שצריך: נייר טואלט, נייר למטבח',
        'להכניס כביסה – מה שקטן למייבש, מה שגדול לתלות',
        'איך שמורידה – מקפלת ומחלקת לחדרים',
        'לטאטא / שואב / מגבון זריז',
        'להדליק נר, לטהר עם מרווה, פאולו סנטו, קטורת',
        'יום קסום בממלכה של המלכה ⚜️',
      ],
    },
    colors: { ...defaultColors, background: warmBg2 },
  },
  // SLIDE 12 - Rosh Chodesh Nisan
  {
    id: 12,
    title: 'ראש חודש ניסן',
    subtitle: 'חודש של חירות, התחדשות ואביב',
    layout: 'full-image',
    content: {
      bodyText: 'ניסן – חודש הגאולה, חודש האביב. זמן של התחלות חדשות, ניקיון הבית והנפש.',
      imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800',
    },
    colors: { ...defaultColors, background: warmBg3 },
  },
  // SLIDE 13 - From Stress to Serenity: Comparison
  {
    id: 13,
    title: 'מסטרס לשלווה: השוואה',
    layout: 'comparison-table',
    content: {
      tableHeaders: ['אלמנט', 'בית מעורר סטרס', 'בית מעורר שלווה'],
      tableRows: [
        ['צבעים', 'צבעים עזים, ניגודיות חזקה', 'פלטה מונוכרומטית, גוני פסטל ואדמה'],
        ['סדר', 'עומס פריטים על כל משטח', 'משטחים פנויים, סדר מינימליסטי'],
        ['תאורה', 'תאורת פלורסנט קרה וגבוהה', 'אור חם, עמום ושכבתי'],
        ['חומרים', 'פלסטיק, מתכת קרה, חומרים סינתטיים', 'עץ, פשתן, כותנה ואבן'],
      ],
    },
    colors: { ...defaultColors, background: warmBg4 },
  },
  // SLIDE 14 - Closing Slide
  {
    id: 14,
    title: 'שלום',
    subtitle: 'מתחיל מבפנים, מוקרן החוצה',
    layout: 'closing',
    content: {
      contactInfo: [
        'תודה על ההקשבה',
        'יש לכם שאלות?',
        'your_design_peace | www.homedesignpeace.co.il',
      ],
    },
    colors: { ...defaultColors, background: warmBg1, titleText: '#8FAD88', bodyText: '#7F8C8D' },
  },
  // SLIDE 15 - Image Sources
  {
    id: 15,
    title: 'Image Sources',
    layout: 'closing',
    content: {
      contactInfo: [
        'home-designing.com',
        'livingetc.com',
        'linencult.com',
        'edwardgeorgelondon.com',
        'unsplash.com',
      ],
    },
    colors: { ...defaultColors, background: warmBg2 },
  },
];
