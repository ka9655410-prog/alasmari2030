# Footer with the Riyadh Vision 2030 photo as background

## What changes
- The photo you sent (Riyadh at dusk with the Vision 2030 logo) becomes the footer background, filling the whole footer on phone, tablet and computer.
- A dark navy tint is laid over the photo, stronger at the top and sides where the text sits. The footer text (company name, links, services, contact details, social icons and copyright line) stays white and easy to read, and the city and the logo still show through.
- The footer columns sit on soft glass panels so the text is readable over the brighter parts of the photo (car lights, sky).
- Because the photo already shows the Vision 2030 logo, I remove the small Vision 2030 logo from the footer's first column so it doesn't appear twice. The photo itself is used as-is, not edited.
- The copyright line gets a dark strip of its own at the very bottom.
- The wave shape at the top of the footer stays, so it still flows nicely from the section above.

## "ما يميزنا" (Why Us) section: new orbit layout
- Light blue background, so the page alternates light and dark (the steps and contact sections are dark).
- In the middle, a large dark navy glowing circle with the company's drop icon and the title «ما يميزنا», with two slowly rotating dashed rings around it.
- The 5 points sit around the circle like an orbit, each a white card with a glowing round icon, a number badge and its short description, joined to the centre by thin animated lines.
- The cards appear one after another as you scroll and lift with a glow when you point at them.
- Phone and tablet: the circle sits on top, smaller, and the 5 cards stack below it along a vertical glowing line, easy to read with one hand.
- Same text as now; nothing new invented.

## Roadmap
- A `roadmap.md` task list is added for the footer and Why Us tasks.

## Technical details
- Why Us: new `OrbitSection` in `src/routes/index.tsx` replacing the timeline for `#why`. Desktop uses a relative container with cards absolutely positioned on a circle (computed angles), with an SVG for the connector lines and rings, plus a `spin-slow` keyframe in `src/styles.css` (off for reduced motion). Mobile uses a plain stacked grid.
- Upload the image with `lovable-assets` to `src/assets/riyadh-vision-footer.png.asset.json`, then use it as a lazy CSS background on `<footer>` (`bg-cover bg-center`) with a `--gradient-footer` overlay token made from navy (#0A2643), in `src/styles.css`.
- Columns get `glass-dark` panels with text shadow; existing color tokens only.
- Check with screenshots at 390px, 768px and 1280px.
