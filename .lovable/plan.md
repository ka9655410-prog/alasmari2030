# Restyle "Why Us" and "Contact" to match the "4 Simple Steps" section

## What changes

**1. "Why Us" section — same look as the steps section**
- Dark navy background with soft blue glows, the same as the steps section.
- Centered heading with a glass label above it.
- The 5 points shown as a row of round, glowing icon circles with a pulse ring, joined by the animated dashed curve (on phones: a vertical line down the side).
- Each point gets a glass card under its circle: a small "01–05" label, the title and the short description.
- Cards alternate up and down a little, the same as the steps.

**2. "Contact Us" section — same look**
- Same dark background, glows, centered heading and glass label.
- The 5 contact items (phone, WhatsApp, address, unified number, commercial registration) shown as glowing icon circles joined by the animated dashed curve, each with a glass card under it. Phone and WhatsApp stay tappable.
- The WhatsApp form and the map stay below, in glass panels that match the dark background.

**3. Fix the numbers on the cards**
- The big faded numbers (01, 02...) behind the card text are currently cut off at the card edge. They will sit fully inside each card, at a clean size and position, in the steps, "Why Us" and contact cards.

**Order of sections:** To avoid three dark sections in a row, "Why Us" and "Contact" stay where they are; the light sections between them keep the page varied.

## Technical details
- Pull the steps layout into a reusable `TimelineSection` component in `src/routes/index.tsx` (props: kicker, title, items with icon/title/desc/href, number of columns).
- Make the SVG curve path scale for 4 or 5 items (generate the path from the item count).
- Numbers: remove negative offsets and use `end-3 top-2 text-5xl md:text-6xl leading-none` inside `overflow-hidden` cards, so they always show in full.
- Form inputs get dark-surface glass styles using existing tokens only (no new colors outside the letterhead set).
- Check desktop 1280px and phone 390px with screenshots.
