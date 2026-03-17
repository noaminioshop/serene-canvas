import { Slide } from '@/types/slides';

const defaultColors = {
  background: '#f5f5f0',
  titleText: '#2c3e50',
  bodyText: '#4a4a4a',
  accentColor: '#8fad88',
};

export const initialSlides: Slide[] = [
  // SLIDE 1 - Title
  {
    id: 1,
    title: 'עיצוב הבית: שלווה ושלום',
    subtitle: 'יצירת מרחב המזין את הנפש והרוח',
    layout: 'title-slide',
    content: {},
    colors: { ...defaultColors },
  },
  // SLIDE 2 - Section Title
  {
    id: 2,
    title: 'שגרת בוקר לשלווה',
    subtitle: 'צעדים פשוטים לבוקר מלא שקט',
    layout: 'title-slide',
    content: {},
    colors: { ...defaultColors, accentColor: '#7a9e71' },
  },
  // SLIDE 3
  {
    id: 3,
    title: 'התחלה מודעת',
    subtitle: 'רגע של תודה',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'לקום עם תחושת הכרת תודה',
        'לסדר את המיטה מיד',
        'לצחצח שיניים ולרענן את הפנים',
        'לקחת רגע של נשימה עמוקה',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 4
  {
    id: 4,
    title: 'טוהר וניקיון',
    subtitle: 'מרחב נקי = נפש נקייה',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'לאסוף בגדים מפוזרים',
        'לנקות את חדר האמבטיה',
        'לסדר מגבות ואביזרים',
        'ליצור תחושת רעננות',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 5
  {
    id: 5,
    title: 'לב המטבח',
    subtitle: 'המטבח כמרכז הבית',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'לנקות את משטח העבודה',
        'לשטוף את הכיור עד שיבריק',
        'לסדר כלים במקומם',
        'ליצור מרחב נעים לבישול',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 6
  {
    id: 6,
    title: 'מרחבים פנויים',
    subtitle: 'לפנות מקום לשלווה',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'משטחים נקיים', description: 'לסקור ולנקות את כל המשטחים בבית', icon: '✨' },
        { title: 'שולחנות פנויים', description: 'לפנות שולחנות מחפצים מיותרים', icon: '🪑' },
        { title: 'רצפה פנויה', description: 'לוודא שהרצפה נקייה וחופשית', icon: '🏠' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 7
  {
    id: 7,
    title: 'אוויר, אור ומוזיקה',
    subtitle: 'להזמין את הטבע הביתה',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'אוויר צח', description: 'לפתוח חלונות ולאוורר את הבית', icon: '🌬️' },
        { title: 'אור טבעי', description: 'להכניס את השמש — להרים תריסים', icon: '☀️' },
        { title: 'מוזיקה מרגיעה', description: 'להפעיל מוזיקה שמרגיעה את הנפש', icon: '🎵' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 8
  {
    id: 8,
    title: 'ראש חודש ניסן',
    subtitle: 'זמן של התחדשות ופריחה',
    layout: 'full-image',
    content: {
      bodyText: 'כמו הטבע שמתחדש באביב, גם אנחנו מוזמנים להתחדש — בבית, בלב ובנפש.',
      imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1200',
    },
    colors: { ...defaultColors, titleText: '#ffffff', bodyText: '#f0f0f0' },
  },
  // SLIDE 9
  {
    id: 9,
    title: 'טיפוח וסדר',
    subtitle: 'פרטים קטנים שעושים את ההבדל',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'להשקות צמחים',
        'לסדר את הספה ולנפנף כריות',
        'לקפל שמיכות',
        'ליצור פינות נעימות',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 10
  {
    id: 10,
    title: 'משימות קטנות, השפעה גדולה',
    subtitle: 'הדברים הקטנים יוצרים את השינוי',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'מילוי מלאי', description: 'למלא סבון, נייר טואלט ומוצרים חסרים', icon: '🧴' },
        { title: 'כביסה', description: 'להכניס מכונת כביסה או לקפל כביסה נקייה', icon: '👕' },
        { title: 'סידור ארונות', description: 'לסדר פינה אחת שמפריעה', icon: '🗄️' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 11
  {
    id: 11,
    title: 'ניקיון מהיר',
    subtitle: '10 דקות שמשנות הכל',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'לטאטא או לשאוב אבק',
        'למחות משטחים עם מטלית לחה',
        'לנקות כתמים שמפריעים',
        'לרוקן פחי אשפה',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 12
  {
    id: 12,
    title: 'סיום טקסי',
    subtitle: 'לחתום את השגרה בקדושה',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'להדליק נר ריחני',
        'לטהר עם מרווה, פאלו סנטו או קטורת',
        'לעצור רגע ולהתבונן במרחב שיצרת',
        'להרגיש גאווה ושלווה',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1602607616969-1e3afa0cfe4b?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 13 - Quote
  {
    id: 13,
    title: 'ההשראה: תפילת השלווה',
    layout: 'quote',
    content: {
      quoteText: 'אלוהים, תן לי את השלווה לקבל את הדברים שאינני יכול לשנות, את האומץ לשנות את הדברים שאני יכול, ואת החוכמה להבחין ביניהם.',
      quoteAttribution: 'תפילת השלווה',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 14
  {
    id: 14,
    title: 'הבית כעוגן של שקט',
    subtitle: 'המרחב שמחזיק אותנו',
    layout: 'two-column',
    content: {
      bodyText: 'הבית הוא לא רק מקום פיזי — הוא מקלט רגשי. כשהבית מסודר ונעים, הנפש שלנו מוצאת מנוחה. עיצוב מודע של הבית הוא פעולה של אהבה עצמית.',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 15
  {
    id: 15,
    title: 'פלטת צבעים מרגיעה',
    subtitle: 'צבעים שמרפאים',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'גווני אדמה', description: 'בז\', חום חם, שמנת — צבעים שמחברים לטבע ומעניקים תחושת יציבות', icon: '🤎' },
        { title: 'גווני ירוק', description: 'ירוק מרווה, ירוק זית — צבעי טבע שמעניקים רוגע ורעננות', icon: '💚' },
        { title: 'גווני כחול', description: 'כחול שמיים, תכלת רך — צבעים שמזכירים מים ושמיים ומרגיעים', icon: '💙' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 16
  {
    id: 16,
    title: 'להכניס את הטבע הביתה',
    subtitle: 'ביופיליה — האהבה לטבע',
    layout: 'two-column',
    content: {
      bulletPoints: [
        'צמחי בית — ירוק חי בכל חדר',
        'פרחים טריים על השולחן',
        'חומרים טבעיים: עץ, אבן, פשתן',
        'נוף טבעי דרך החלון',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 17
  {
    id: 17,
    title: 'אור טבעי ואווירה',
    subtitle: 'תאורה שמשנה הכל',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'אור יום', description: 'למקסם חלונות ולהשתמש בווילונות שקופים שמפזרים אור', icon: '🌅' },
        { title: 'תאורה חמה', description: 'נורות בגוון חם, מנורות עמידה ותאורה עקיפה', icon: '💡' },
        { title: 'נרות', description: 'נרות ריחניים ונרות שעווה טבעית לאווירה אינטימית', icon: '🕯️' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 18
  {
    id: 18,
    title: 'פחות זה יותר',
    subtitle: 'מינימליזם מודע',
    layout: 'two-column',
    content: {
      bodyText: 'מינימליזם אינו ריקנות — הוא בחירה מודעת. כל חפץ בבית צריך לשרת מטרה או לעורר שמחה. כשמפנים את העודף, נוצר מקום לשלווה ולנשימה.',
      bulletPoints: [
        'לוותר על מה שלא משמח',
        'לארגן בקופסאות ומדפים',
        'משטחים נקיים = מוח נקי',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 19
  {
    id: 19,
    title: 'חומרים וטקסטורות מהטבע',
    subtitle: 'למגע יש משמעות',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'עץ טבעי', description: 'רהיטי עץ, מדפים ואלמנטים שמוסיפים חום טבעי', icon: '🪵' },
        { title: 'פשתן וכותנה', description: 'טקסטיל טבעי למצעים, כריות ווילונות', icon: '🧵' },
        { title: 'אבן וקרמיקה', description: 'אלמנטים קשיחים שמאזנים את הרכות', icon: '🪨' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 20
  {
    id: 20,
    title: 'פינת המפלט האישית',
    subtitle: 'מקום רק לך',
    layout: 'two-column',
    content: {
      bodyText: 'כל אחד זקוק למקום קטן בבית שהוא רק שלו. פינה שקטה עם כורסה נוחה, שמיכה רכה, וספר טוב — מפלט קטן מהעולם.',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    },
    colors: { ...defaultColors },
  },
  // SLIDE 21
  {
    id: 21,
    title: 'עיצוב לכל החושים',
    subtitle: 'חוויה רב-חושית',
    layout: 'three-column-cards',
    content: {
      cards: [
        { title: 'ריח', description: 'שמנים אתריים, נרות ריחניים, פרחים טריים', icon: '👃' },
        { title: 'מגע', description: 'טקסטורות נעימות, שמיכות רכות, שטיחים', icon: '🤲' },
        { title: 'שמיעה', description: 'מוזיקה רכה, מפל מים, שקט מוחלט', icon: '👂' },
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 22 - Comparison Table
  {
    id: 22,
    title: 'מסטרס לשלווה: השוואה',
    subtitle: 'לפני ואחרי',
    layout: 'comparison-table',
    content: {
      tableHeaders: ['היבט', 'מצב לחץ', 'מצב שלווה'],
      tableRows: [
        ['צבעים', 'צבעים חזקים וצורמים', 'גווני אדמה וטבע רכים'],
        ['תאורה', 'תאורה לבנה חזקה', 'תאורה חמה ועקיפה'],
        ['חפצים', 'עומס והצטברות', 'מינימום מודע'],
        ['ריחות', 'ריחות מלאכותיים', 'ריחות טבעיים ורכים'],
        ['צלילים', 'רעש ובלגן', 'שקט או מוזיקה רכה'],
        ['טקסטורות', 'פלסטיק וסינתטי', 'עץ, פשתן, כותנה'],
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 23 - Closing
  {
    id: 23,
    title: 'שלום',
    subtitle: 'תודה שהצטרפתם למסע',
    layout: 'closing',
    content: {
      bodyText: 'מאחלת לכולם בית מלא שלווה, שמחה ואור.',
      contactInfo: [
        'בהשראת תפילת השלווה',
        'עיצוב ותוכן: שלווה ושלום',
      ],
    },
    colors: { ...defaultColors },
  },
  // SLIDE 24 - Credits
  {
    id: 24,
    title: 'מקורות תמונה',
    subtitle: 'Image Sources & Credits',
    layout: 'closing',
    content: {
      bodyText: 'כל התמונות במצגת זו הן מ-Unsplash.com, תחת רישיון חינמי לשימוש.',
      contactInfo: [
        'Unsplash.com — Free high-resolution photos',
        'תמונות: Spacejoy, Sidekix Media, R Architecture, Huy Nguyen',
        'Icons: Emoji (Unicode Standard)',
      ],
    },
    colors: { ...defaultColors },
  },
];
