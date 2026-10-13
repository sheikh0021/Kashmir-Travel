import type { GalleryId } from "@/lib/site";

export type Lang = "en" | "hi";

export type FaqItem = {
  q: string;
  a: string;
  sample?: boolean;
};

export type Copy = {
  brand: string;
  nav: { home: string; gallery: string; draw: string; faq: string; contact: string };
  family: {
    kicker: string;
    title: string;
    titleLine2: string;
    lead: string;
    steps: { n: string; title: string; text: string }[];
    poolTitle: string;
    poolLead: string;
    empty: string;
    sampleNote: string;
    draw: string;
    drawing: string;
    redraw: string;
    groupTitle: string;
    waiting: string;
    formTitle: string;
    formLead: string;
    name: string;
    phone: string;
    city: string;
    seats: string;
    submit: string;
    success: string;
    confirm: string;
    countLabel: string;
    needTwo: string;
    errName: string;
    errPhone: string;
    errCity: string;
    homeTitle: string;
    homeLead: string;
    homeLink: string;
  };
  langLabel: string;
  openMenu: string;
  closeMenu: string;
  whatsapp: string;
  call: string;
  whatsappMessage: string;
  sample: string;
  kicker: string;
  title: string;
  titleLine2: string;
  subtitle: string;
  pack: string;
  itineraryCta: string;
  priceKicker: string;
  price: string;
  priceNote: string;
  days: string;
  daysDetail: string;
  includedTitle: string;
  includedLead: string;
  inclusions: { title: string; text: string }[];
  stepsTitle: string;
  steps: { n: string; title: string; text: string }[];
  bandTitle: string;
  bandText: string;
  galleryTitle: string;
  galleryLead: string;
  galleryNote: string;
  seeGallery: string;
  captions: Record<GalleryId, string>;
  closePhoto: string;
  faqTitle: string;
  faqLead: string;
  seeFaq: string;
  faqs: FaqItem[];
  contactTitle: string;
  contactLead: string;
  officeLabel: string;
  officeLines: string[];
  callLabel: string;
  map: string;
  posterLabel: string;
  posterAlt: string;
  footerLine: string;
  photoCredit: string;
};

const captionsEn: Record<GalleryId, string> = {
  pahalgam: "Pahalgam valley",
  houseboats: "Houseboats on Dal Lake",
  shikara: "A shikara on Dal Lake",
  nishat: "Nishat Bagh, Srinagar",
  "dal-dusk": "Dal Lake at dusk",
  gulmarg: "Snow at Gulmarg",
  meadow: "A high meadow",
  "dal-lake": "Houseboats at Dal Lake",
  betaab: "Betaab Valley",
};

const captionsHi: Record<GalleryId, string> = {
  pahalgam: "पहलगाम घाटी",
  houseboats: "डल झील पर हाउसबोट",
  shikara: "डल झील पर शिकारा",
  nishat: "निशात बाग, श्रीनगर",
  "dal-dusk": "शाम की डल झील",
  gulmarg: "गुलमर्ग की बर्फ",
  meadow: "ऊँचा घास का मैदान",
  "dal-lake": "डल झील के हाउसबोट",
  betaab: "बीताब वैली",
};

export const copy: Record<Lang, Copy> = {
  en: {
    brand: "Al Safar",
    nav: {
      home: "Home",
      gallery: "Gallery",
      draw: "The draw",
      faq: "Questions",
      contact: "Contact",
    },
    family: {
      kicker: "The Al Safar draw",
      title: "From strangers",
      titleLine2: "to family.",
      lead: "You do not need to bring a group. Put your name in. Before a departure, Al Safar draws travelers at random and that draw is the group that goes to Kashmir.",
      steps: [
        {
          n: "01",
          title: "Sign your name",
          text: "Add the name you want on the list, your city, and how many seats you need.",
        },
        {
          n: "02",
          title: "We draw at random",
          text: "Every name in the pool has the same chance. Nobody picks their roommates.",
        },
        {
          n: "03",
          title: "You travel together",
          text: "The drawn names are one group for the 6-day tour. Strangers on day one, a family by the time you come home.",
        },
      ],
      poolTitle: "Names in the pool",
      poolLead: "Only the name and city show here. Phone numbers stay with Al Safar.",
      empty: "No names yet. The cards below are a sample, so you can see a draw.",
      sampleNote: "Sample names. They are not real bookings.",
      draw: "Draw the group",
      drawing: "Drawing…",
      redraw: "Draw again",
      groupTitle: "This group",
      waiting: "The next draw will land here.",
      formTitle: "Put your name in",
      formLead: "Al Safar also gets a WhatsApp message, so the office can confirm your seat.",
      name: "Name on the draw",
      phone: "Phone",
      city: "City",
      seats: "Seats",
      submit: "Join the draw",
      success: "Your name is in the pool.",
      confirm: "A seat is confirmed only after Al Safar replies on WhatsApp.",
      countLabel: "How many names to draw",
      needTwo: "Add at least two names before a real draw.",
      errName: "Add the name you want on the list.",
      errPhone: "Add a 10-digit mobile number.",
      errCity: "Add your city.",
      homeTitle: "From strangers to family",
      homeLead: "Sign up on your own. Al Safar draws the Kashmir group at random.",
      homeLink: "See the draw",
    },
    langLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    whatsapp: "WhatsApp",
    call: "Call",
    whatsappMessage:
      "Hello Al Safar, I would like the day-wise itinerary and seat details for the 6-day Kashmir group tour from Jabalpur.",
    sample: "Sample",
    kicker: "Group tours · Jabalpur to Kashmir",
    title: "Kashmir",
    titleLine2: "is calling.",
    subtitle: "6-day all-inclusive guided group tours from Jabalpur.",
    pack: "Pack your bags",
    itineraryCta: "Message us on WhatsApp for the day-wise itinerary.",
    priceKicker: "Packages from",
    price: "₹13,000",
    priceNote: "per person · minimum package",
    days: "6 days",
    daysDetail: "All-inclusive guided group tour",
    includedTitle: "Included with the tour",
    includedLead:
      "The printed offer covers four things. Ask us on WhatsApp how each one is arranged for your departure.",
    inclusions: [
      { title: "Stay", text: "Your stay is part of the package." },
      { title: "Meals", text: "Meals are included." },
      { title: "Travel", text: "Travel is included." },
      { title: "Guide", text: "A guide is with the group." },
    ],
    stepsTitle: "How to take a seat",
    steps: [
      {
        n: "01",
        title: "Call or WhatsApp",
        text: "Reach Al Safar on +91 77718 42703.",
      },
      {
        n: "02",
        title: "Ask for the plan",
        text: "Request the day-wise itinerary and which dates have seats.",
      },
      {
        n: "03",
        title: "Confirm",
        text: "Hold your place on the 6-day group tour from Jabalpur.",
      },
    ],
    bandTitle: "Pack your bags.",
    bandText: "Kashmir is calling. The day-wise itinerary is shared on WhatsApp.",
    galleryTitle: "Kashmir, in pictures",
    galleryLead:
      "Lakes, gardens, meadows, and snow. A first look at the valley.",
    galleryNote:
      "Sample scenery. These photographs show places in Kashmir. They are not photos from an Al Safar departure, and they are not a confirmed day-wise plan.",
    seeGallery: "View the gallery",
    captions: captionsEn,
    closePhoto: "Close photo",
    faqTitle: "Before you book",
    faqLead: "Answers taken from the current offer, plus a few sample notes marked clearly.",
    seeFaq: "All questions",
    faqs: [
      {
        q: "How long is the tour?",
        a: "6 days.",
      },
      {
        q: "What is included?",
        a: "Stay, meals, travel, and a guide.",
      },
      {
        q: "What does it cost?",
        a: "Packages start at ₹13,000 per person. That figure is the minimum package.",
      },
      {
        q: "Where does the group leave from?",
        a: "Jabalpur. The office is at Russell Chowk, Napier Town, Jabalpur.",
      },
      {
        q: "How do I get the day-wise itinerary?",
        a: "Message Al Safar on WhatsApp or call +91 77718 42703 and ask for the day-wise itinerary.",
      },
      {
        q: "How do I book?",
        a: "Call or WhatsApp +91 77718 42703. There is no online payment on this site.",
      },
      {
        q: "How many people travel in one group?",
        a: "Group size is not printed on the current offer. Ask us on WhatsApp before you decide.",
        sample: true,
      },
      {
        q: "What should I pack?",
        a: "A useful start is warm layers, comfortable walking shoes, and any personal medicines. Confirm the list with us for your travel dates.",
        sample: true,
      },
      {
        q: "Which month should I choose?",
        a: "Kashmir feels different in each season. Ask which departure dates are open, and we will tell you what that time of year is like.",
        sample: true,
      },
    ],
    contactTitle: "Visit, call, or message",
    contactLead:
      "Seats and the day-wise itinerary are shared directly. Call the office or open WhatsApp.",
    officeLabel: "Visit our office",
    officeLines: ["Russell Chowk, Napier Town,", "Jabalpur"],
    callLabel: "Call to book",
    map: "Open the office on the map",
    posterLabel: "The printed offer",
    posterAlt: "Al Safar poster for the Kashmir group tour from Jabalpur",
    footerLine: "Group tours from Jabalpur to Kashmir",
    photoCredit: "Photographs: Wikimedia Commons and Unsplash.",
  },
  hi: {
    brand: "Al Safar",
    nav: {
      home: "होम",
      gallery: "गैलरी",
      draw: "ड्रॉ",
      faq: "सवाल",
      contact: "संपर्क",
    },
    family: {
      kicker: "Al Safar का ड्रॉ",
      title: "अजनबियों से",
      titleLine2: "परिवार तक।",
      lead: "अपना ग्रुप लेकर आने की ज़रूरत नहीं। नाम लिख दीजिए। प्रस्थान से पहले Al Safar यात्रियों को बेतरतीब चुनता है, और वही ड्रॉ कश्मीर जाने वाला ग्रुप होता है।",
      steps: [
        {
          n: "01",
          title: "नाम लिखें",
          text: "जो नाम सूची में चाहिए, शहर, और कितनी सीटें चाहिए, यह जोड़ें।",
        },
        {
          n: "02",
          title: "हम बेतरतीब चुनते हैं",
          text: "पूल में हर नाम की बराबर संभावना है। कोई अपने साथी खुद नहीं चुनता।",
        },
        {
          n: "03",
          title: "साथ यात्रा करें",
          text: "चुने हुए नाम 6 दिन के टूर का एक ग्रुप हैं। पहले दिन अजनबी, लौटते समय एक परिवार।",
        },
      ],
      poolTitle: "पूल में नाम",
      poolLead: "यहाँ सिर्फ़ नाम और शहर दिखते हैं। फ़ोन नंबर Al Safar के पास रहता है।",
      empty: "अभी कोई नाम नहीं। नीचे के कार्ड नमूना हैं, ताकि ड्रॉ देखा जा सके।",
      sampleNote: "नमूना नाम। ये असली बुकिंग नहीं हैं।",
      draw: "ग्रुप चुनें",
      drawing: "चुन रहे हैं…",
      redraw: "फिर से चुनें",
      groupTitle: "यह ग्रुप",
      waiting: "अगला ड्रॉ यहीं आएगा।",
      formTitle: "अपना नाम डालें",
      formLead: "कार्यालय को व्हाट्सएप संदेश भी जाता है, ताकि सीट पक्की की जा सके।",
      name: "ड्रॉ पर नाम",
      phone: "फ़ोन",
      city: "शहर",
      seats: "सीटें",
      submit: "ड्रॉ में शामिल हों",
      success: "आपका नाम पूल में है।",
      confirm: "सीट तभी पक्की है जब Al Safar व्हाट्सएप पर जवाब दे।",
      countLabel: "कितने नाम चुनें",
      needTwo: "असली ड्रॉ से पहले कम से कम दो नाम जोड़ें।",
      errName: "सूची के लिए नाम लिखें।",
      errPhone: "10 अंकों का मोबाइल नंबर लिखें।",
      errCity: "अपना शहर लिखें।",
      homeTitle: "अजनबियों से परिवार तक",
      homeLead: "अकेले नाम लिखिए। Al Safar कश्मीर का ग्रुप बेतरतीब चुनता है।",
      homeLink: "ड्रॉ देखें",
    },
    langLabel: "भाषा",
    openMenu: "मेनू खोलें",
    closeMenu: "मेनू बंद करें",
    whatsapp: "व्हाट्सएप",
    call: "कॉल",
    whatsappMessage:
      "नमस्ते Al Safar, मुझे जबलपुर से कश्मीर के 6 दिन के ग्रुप टूर की दिन-वार यात्रा और सीट की जानकारी चाहिए।",
    sample: "नमूना",
    kicker: "ग्रुप टूर · जबलपुर से कश्मीर",
    title: "कश्मीर",
    titleLine2: "बुला रहा है।",
    subtitle: "जबलपुर से 6 दिन का ऑल-इन्क्लूसिव गाइडेड ग्रुप टूर।",
    pack: "बैग पैक कीजिए",
    itineraryCta: "दिन-वार यात्रा के लिए व्हाट्सएप पर संदेश भेजें।",
    priceKicker: "पैकेज शुरू",
    price: "₹13,000",
    priceNote: "प्रति व्यक्ति · न्यूनतम पैकेज",
    days: "6 दिन",
    daysDetail: "ऑल-इन्क्लूसिव गाइडेड ग्रुप टूर",
    includedTitle: "टूर में शामिल",
    includedLead:
      "छपे ऑफ़र में चार चीज़ें हैं। आपकी यात्रा में ये कैसे जुड़ती हैं, यह व्हाट्सएप पर पूछ लीजिए।",
    inclusions: [
      { title: "ठहराव", text: "ठहराव पैकेज का हिस्सा है।" },
      { title: "भोजन", text: "भोजन शामिल है।" },
      { title: "यात्रा", text: "यात्रा शामिल है।" },
      { title: "गाइड", text: "ग्रुप के साथ एक गाइड रहता है।" },
    ],
    stepsTitle: "सीट कैसे लें",
    steps: [
      {
        n: "01",
        title: "कॉल या व्हाट्सएप",
        text: "Al Safar से +91 77718 42703 पर बात करें।",
      },
      {
        n: "02",
        title: "यात्रा पूछें",
        text: "दिन-वार कार्यक्रम और किन तारीखों पर सीट है, यह पूछें।",
      },
      {
        n: "03",
        title: "पक्का करें",
        text: "जबलपुर से 6 दिन के ग्रुप टूर पर अपनी जगह पक्की करें।",
      },
    ],
    bandTitle: "बैग पैक कीजिए।",
    bandText: "कश्मीर बुला रहा है। दिन-वार यात्रा व्हाट्सएप पर मिलती है।",
    galleryTitle: "कश्मीर, तस्वीरों में",
    galleryLead: "झील, बाग, घास के मैदान और बर्फ। घाटी की पहली झलक।",
    galleryNote:
      "नमूना दृश्य। ये तस्वीरें कश्मीर की जगहें दिखाती हैं। ये किसी Al Safar प्रस्थान की तस्वीरें नहीं हैं, और न ही पक्की दिन-वार यात्रा।",
    seeGallery: "गैलरी देखें",
    captions: captionsHi,
    closePhoto: "तस्वीर बंद करें",
    faqTitle: "बुकिंग से पहले",
    faqLead: "मौजूदा ऑफ़र से लिए जवाब, और कुछ नमूना नोट जो साफ़ चिह्नित हैं।",
    seeFaq: "सभी सवाल",
    faqs: [
      {
        q: "टूर कितने दिन का है?",
        a: "6 दिन।",
      },
      {
        q: "क्या शामिल है?",
        a: "ठहराव, भोजन, यात्रा और एक गाइड।",
      },
      {
        q: "कीमत क्या है?",
        a: "पैकेज ₹13,000 प्रति व्यक्ति से शुरू होते हैं। यह न्यूनतम पैकेज है।",
      },
      {
        q: "ग्रुप कहाँ से निकलता है?",
        a: "जबलपुर से। कार्यालय रसेल चौक, नेपियर टाउन, जबलपुर में है।",
      },
      {
        q: "दिन-वार यात्रा कैसे मिलेगी?",
        a: "Al Safar को व्हाट्सएप करें या +91 77718 42703 पर कॉल करके दिन-वार यात्रा माँगें।",
      },
      {
        q: "बुकिंग कैसे करें?",
        a: "+91 77718 42703 पर कॉल या व्हाट्सएप करें। इस साइट पर ऑनलाइन भुगतान नहीं है।",
      },
      {
        q: "एक ग्रुप में कितने लोग होते हैं?",
        a: "ग्रुप का आकार मौजूदा ऑफ़र पर नहीं छपा है। फैसला करने से पहले व्हाट्सएप पर पूछें।",
        sample: true,
      },
      {
        q: "क्या साथ ले जाएँ?",
        a: "गर्म कपड़े, आरामदायक जूते और अपनी दवाइयाँ एक अच्छा शुरुआत है। अपनी तारीखों के लिए सूची हमसे पक्की कर लें।",
        sample: true,
      },
      {
        q: "कौन सा महीना चुनें?",
        a: "कश्मीर हर मौसम में अलग लगता है। कौन सी तारीखें खुली हैं यह पूछें, हम बताएँगे उस समय घाटी कैसी रहती है।",
        sample: true,
      },
    ],
    contactTitle: "आइए, कॉल करें, या संदेश भेजें",
    contactLead:
      "सीट और दिन-वार यात्रा सीधे मिलती है। कार्यालय पर कॉल करें या व्हाट्सएप खोलें।",
    officeLabel: "हमारा कार्यालय",
    officeLines: ["रसेल चौक, नेपियर टाउन,", "जबलपुर"],
    callLabel: "बुकिंग के लिए कॉल करें",
    map: "मैप पर कार्यालय खोलें",
    posterLabel: "छपा हुआ ऑफ़र",
    posterAlt: "जबलपुर से कश्मीर ग्रुप टूर का Al Safar पोस्टर",
    footerLine: "जबलपुर से कश्मीर के ग्रुप टूर",
    photoCredit: "तस्वीरें: Wikimedia Commons और Unsplash।",
  },
};
