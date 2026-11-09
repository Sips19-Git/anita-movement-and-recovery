const hero6 = { url: "/images/upload-5.jpg" };
const hero5 = { url: "/images/upload-4.jpg" };
const hero7 = { url: "/images/upload-6.jpg" };
const hero1 = { url: "/images/upload.jpg" };
const svc1 = { url: "/images/new-11.jpg" };
const svc2 = { url: "/images/new-12.jpg" };
const svc3 = { url: "/images/new-13.jpg" };
const svc4 = { url: "/images/new-14.jpg" };
const svc5 = { url: "/images/new-15.jpg" };
const svc6 = { url: "/images/new-16.jpg" };
const svc7 = { url: "/images/new-17.jpg" };

export const site = {
  name: "Anita van der Lingen Physiotherapy",
  shortName: "Anita van der Lingen",
  tagline: "Movement. Recovery. Wellbeing.",
  phone: "018 175 0106",
  phoneTel: "+27181750106",
  whatsapp: "066 179 6643",
  whatsappIntl: "27661796643",
  email: "anitavdl.physio@gmail.com",
  address: "105 Molen Street, Potchefstroom, South Africa",
  hours: [
    ["Monday", "08:00 – 17:00"],
    ["Tuesday", "08:00 – 17:00"],
    ["Wednesday", "08:00 – 17:00"],
    ["Thursday", "08:00 – 17:00"],
    ["Friday", "08:00 – 17:00"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],
  socials: {
    instagram: "https://www.instagram.com/anitavanderlingen.physio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/Anita-van-der-Lingen-Physiotherapy",
    linkedin: "https://www.linkedin.com/in/anita-van-der-lingen",
  },
} as const;

export const whatsappLink = (msg = "Hi Anita, I'd like to book a physiotherapy appointment.") =>
  `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(msg)}`;

export const heroSlides = [
  {
    image: hero6.url,
    eyebrow: "Champions in care",
    title: "Restore movement. Recover stronger.",
    text: "Evidence-based physiotherapy in the heart of Potchefstroom.",
  },
  {
    image: hero5.url,
    eyebrow: "Pre & post-natal",
    title: "Guided rehabilitation, tailored to you.",
    text: "Personalised programmes for every body, every recovery.",
  },
  {
    image: hero7.url,
    eyebrow: "Back to the game",
    title: "Move better. Live without limits.",
    text: "Improve mobility, build resilience, prevent re-injury.",
  },
  {
    image: hero1.url,
    eyebrow: "Compassionate care",
    title: "Care that listens. Treatment that works.",
    text: "Trusted by patients of every age across the North West.",
  },
];

export const services = [
  { slug: "sports", title: "Sports Physiotherapy", desc: "Acute injury care, return-to-play planning and performance support for athletes of every level.", image: svc6.url },
  { slug: "ortho", title: "Orthopaedic Rehabilitation", desc: "Targeted rehab for joint, bone and soft-tissue conditions, from diagnosis to full recovery.", image: svc2.url },
  { slug: "post-surgery", title: "Post-Surgery Recovery", desc: "Structured recovery after orthopaedic and general surgery to restore function safely.", image: svc3.url },
  { slug: "pain", title: "Pain Management", desc: "Hands-on and active strategies for chronic and acute pain, without relying on medication.", image: svc1.url },
  { slug: "mobility", title: "Mobility & Strength", desc: "Progressive rehab to rebuild range of motion, balance and strength.", image: svc4.url },
  { slug: "prevention", title: "Injury Prevention", desc: "Screening, biomechanics and conditioning to keep you moving and reduce re-injury risk.", image: svc7.url },
  { slug: "manual", title: "Manual Therapy", desc: "Skilled hands-on techniques for joint mobilisation, soft tissue release and pain relief.", image: svc5.url },
];

export const conditions = [
  "Lower back & neck pain",
  "Sports injuries",
  "Post-operative rehabilitation",
  "Knee, hip & shoulder pain",
  "Sprains, strains & ligament injuries",
  "Tendinopathies",
  "Postural problems & headaches",
  "Arthritis & joint stiffness",
  "Balance & falls (elderly care)",
  "Pre- and post-natal rehab",
  "Work-related & repetitive strain",
  "Chronic pain conditions",
];

export const testimonials = [
  { name: "Pieter M.", role: "Hardloper", quote: "Anita het my terug op die pad gekry ná 'n hardnekkige kniebesering. Kalm, professioneel en absoluut effektief." },
  { name: "Sarah K.", role: "Pasiënt ná operasie", quote: "Ses weke ná my operasie het ek pynvry geloop. Haar program het al die verskil gemaak." },
  { name: "Johan v. R.", role: "Rugbyspeler", quote: "Die beste fisioterapeut in Potchefstroom — sonder twyfel. Praktiese sorg en 'n duidelike plan van dag een af." },
  { name: "Marie B.", role: "Afgetrede", quote: "Anita luister regtig. Sy behandel die hele mens, nie net die pyn nie. Ek voel weer mobiel en selfversekerd." },
  { name: "Lerato D.", role: "Kantoorwerker", quote: "My chroniese nekpyn is uiteindelik weg. Praktiese raad wat ek elke dag gebruik." },
];

export const faqs = [
  { q: "Do I need a doctor's referral?", a: "No referral is needed. You can book a physiotherapy appointment directly. If you have imaging or a referral letter, please bring it along." },
  { q: "Do you claim from medical aid?", a: "Yes. We are registered with the HPCSA and BHF, and we submit claims directly to most South African medical aids." },
  { q: "How long is a session?", a: "Initial assessments are 45–60 minutes. Follow-up sessions are typically 30–45 minutes depending on your treatment plan." },
  { q: "What should I wear?", a: "Comfortable clothing that allows access to the area being treated — for example shorts for a knee or activewear for back assessments." },
  { q: "How many sessions will I need?", a: "It depends on your condition. After your first assessment Anita will discuss a realistic plan and estimated timeline with you." },
];

export const whyChooseUs = [
  { title: "Experienced clinician", desc: "Years of hands-on experience across sports, orthopaedic and chronic care." },
  { title: "Evidence-based care", desc: "Modern techniques grounded in the latest physiotherapy research." },
  { title: "Personalised plans", desc: "Treatment built around your body, lifestyle and goals — never one-size-fits-all." },
  { title: "Welcoming clinic", desc: "A calm, professional space designed for healing and comfort." },
];
