# Stronger Quality / Safety / Compliance and a phone-friendly "نسعد بخدمتك"

## 1. Quality, Safety, Compliance (in the "شريك موثوق" section)
Replace the three small white pills with one bold dark navy band below the paragraph:
- Three columns joined by thin glowing dividers. On phones they stack, each with a short line between.
- Each column has a large glowing round icon with a soft pulse ring, the word (الجودة / السلامة / الامتثال) in big bold type, and one short line under it:
  - Quality: "تنفيذ دقيق بمعايير عالية"
  - Safety: "حماية فريقنا ومنشأتك"
  - Compliance: "وفق اشتراطات البلدية والدفاع المدني"
- An animated light sweep across the band and a small lift on hover.
- The three words still appear only once in the section, as cards beside the text, never on the photo.
- The short lines are new text I'm writing; you can change them.

## 2. "نسعد بخدمتك" on phone and tablet
- **Order on phone:** WhatsApp and call buttons first, then the form, then the address and registration numbers, then the map.
- **Buttons:** Full width and at least 64px tall. On phones, WhatsApp and call sit side by side as two big squares with the icon on top, easy to reach with a thumb.
- **Form:** Larger fields (56px tall) with the right phone keyboard. On phones, the send button sticks to the bottom of the form while you scroll.
- **Tablet:** Buttons and info side by side on top, form full width below.
- **Map:** Shorter on phones (about 260px) with a clear "افتح في الخرائط" button below it.
- **Spacing:** Less side padding on small screens so nothing feels cramped. Nothing sits behind the floating WhatsApp button.

## Technical details
- Edit only `src/routes/index.tsx` (#about list and #contact section) and add the new short lines to `src/content/site.ts` (AR + EN).
- Use CSS `order-*` utilities for mobile ordering, plus `sm:`/`md:`/`lg:` grid changes, existing color tokens only.
- Check with screenshots at 390px, 768px and 1280px.
