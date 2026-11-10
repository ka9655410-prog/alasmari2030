# Footer with the Riyadh Vision 2030 photo as background

## What changes
- The photo you sent (Riyadh at dusk with the Vision 2030 logo) becomes the footer background, filling the whole footer on phone, tablet and computer.
- A dark navy tint is laid over the photo, stronger at the top and sides where the text sits. The footer text (company name, links, services, contact details, social icons and copyright line) stays white and easy to read, and the city and the logo still show through.
- The footer columns sit on soft glass panels so the text is readable over the brighter parts of the photo (car lights, sky).
- Because the photo already shows the Vision 2030 logo, I remove the small Vision 2030 logo from the footer's first column so it doesn't appear twice. The photo itself is used as-is, not edited.
- The copyright line gets a dark strip of its own at the very bottom.
- The wave shape at the top of the footer stays, so it still flows nicely from the section above.

## Technical details
- Upload the image with `lovable-assets` to `src/assets/riyadh-vision-footer.png.asset.json`, then use it as a lazy CSS background on `<footer>` (`bg-cover bg-center`) with a `--gradient-footer` overlay token made from navy (#0A2643), in `src/styles.css`.
- Columns get `glass-dark` panels with text shadow; existing color tokens only.
- Check with screenshots at 390px, 768px and 1280px.
