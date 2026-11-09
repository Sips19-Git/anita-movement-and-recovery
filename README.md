#  Anita's Healing Space

You are a UI/UX analysis and website architecture system.

Business Name: Anita van der Lingen Physiotherapy

Business Information:

* Physiotherapy Practice
* Address: 105 Molen Street, Potchefstroom, South Africa
* WhatsApp: 066 179 6643
* Telephone: 018 175 0106
* Email: [anitavdl.physio@gmail.com](mailto:anitavdl.physio@gmail.com)
* Website: https://anitawebsite.netlify.app

Operating Hours:

* Monday: 08:00 - 17:00
* Tuesday: 08:00 - 17:00
* Wednesday: 08:00 - 17:00
* Thursday: 08:00 - 17:00
* Friday: 08:00 - 17:00
* Saturday: Closed
* Sunday: Closed

Design a modern, professional, trustworthy physiotherapy website focused on patient care, rehabilitation, recovery, wellness, and mobility improvement.

The homepage hero section must contain a full-width automatic image slideshow/carousel with smooth transitions. Use high-quality images of physiotherapy treatment sessions, rehabilitation exercises, patient recovery, stretching, sports injury treatment, and a welcoming clinic environment. Include navigation arrows and indicators. The slideshow should have a call-to-action button on each slide leading to appointment booking via WhatsApp.

Target Audience:

* Sports injury patients
* Individuals recovering from surgery
* Chronic pain sufferers
* Elderly patients
* Athletes
* General physiotherapy patients

Create the following pages:

1. Home
2. About Anita
3. Services
4. Conditions Treated
5. Testimonials
6. FAQs
7. Contact

Homepage Sections:

* Hero Slideshow Banner
* Introduction and Welcome
* About Anita van der Lingen
* Physiotherapy Services Overview
* Conditions Treated
* Why Choose Us
* Patient Testimonials
* Frequently Asked Questions
* Contact Information
* Interactive Location Map
* Call-to-Action Appointment Section
* Footer

Services Section:

* Sports Physiotherapy
* Orthopaedic Rehabilitation
* Post-Surgery Recovery
* Pain Management
* Mobility and Strength Rehabilitation
* Injury Prevention
* Manual Therapy

Required Features:

* WhatsApp appointment booking
* Click-to-call functionality
* Contact form
* Google Maps integration
* Responsive mobile-first design
* SEO-friendly structure
* Fast loading performance
* Accessibility compliance
* Testimonial carousel
* FAQ accordion
* Sticky navigation
* Floating WhatsApp button
* Online appointment request form

Visual Style:

* Clean and modern medical aesthetic
* Soft calming colour palette
* White backgrounds with teal and soft green accents
* Large professional imagery
* Rounded cards and subtle shadows
* Elegant typography
* Spacious layout with excellent visual hierarchy
* Premium healthcare branding

Generate a complete UI structure, page architecture, component hierarchy, design system, user flows, and content strategy suitable for a professional physiotherapy practice.
use the 6th image on the about section and then use the last image as the logo image

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://anita-movement-and-recovery.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b431adeb-5246-4f61-9d50-759a8b33454f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Portable images and Netlify

All displayed images use same-origin `/images/` paths. `npm run dev` and
`npm run build` prepare exact originals in `public/images` from the retained
asset pointers, without resizing, compression, or substitutions. These files
are copied to the production client output automatically by Vite. A build
check verifies that every emitted image is byte-identical to its local source
and fails the build if any image is missing or changed.

`netlify.toml` configures `npm run build`, `NITRO_PRESET=netlify`, Node 22,
and the publish directory `dist/client`. Nitro writes Netlify's server
functions separately. Deploy a fresh GitHub commit using these settings;
an older deployment does not contain newer image references or checks.
The image setup needs internet access only when originals are not already
present; deployed visitors never request these images from Lovable.
`scripts/original-images.json` records SHA-256 fingerprints, dimensions,
and original asset identities for all 18 retrieved uploads. Preparation checks
the original fingerprints, not just file sizes, and restores corrupt local
copies from the original upload. Missing or altered originals fail explicitly
with their filename. No fallback image is ever used.

### Image inventory

| Placement | Original files served locally |
| --- | --- |
| Home slideshow (four slides) | upload-5.jpg, upload-4.jpg, upload-6.jpg, upload.jpg |
| Home clinic photo | new-10.jpg |
| Home and About Anita photo | new-9.jpg |
| Home appointment background | upload-2.jpg |
| Sports Physiotherapy | new-16.jpg |
| Orthopaedic Rehabilitation | new-12.jpg |
| Post-Surgery Recovery | new-13.jpg |
| Pain Management | new-11.jpg |
| Mobility & Strength | new-14.jpg |
| Injury Prevention | new-17.jpg |
| Manual Therapy | new-15.jpg |
| Header and footer on all pages | logo.png |

All **18 original uploads** were retrieved and compared byte-for-byte; none
were missing. There are **15 unique images in use**. Another three original assets are
preserved locally but currently unused: anita-portrait.png, upload-3.jpg,
upload-7.jpg. Five earlier, unused JPGs remain unchanged in `src/assets`.
There is no gallery or separate Contact photo. Contact, Conditions,
Testimonials, and FAQs use the shared logo. Navigation, service, social,
contact, and WhatsApp icons are bundled inline SVGs from Lucide, not hosted
image links. Google Maps remains an external interactive embed; downloading
its changing map tiles would alter its functionality.
