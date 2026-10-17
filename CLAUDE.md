# Portfolio: project rules

This is Alex's personal portfolio, used to land product designer roles. Visual craft is the product. Treat every change, however small, as design work under review by a hiring manager.

## Detail and care (applies to every task, including "simple" ones)
- After any visual change, check every state the element has: default, hover, focus, compact/scrolled, light and dark, phone and desktop. A change that looks right in one state and wrong in another is not done.
- Balance optically, not just numerically. Icons have built-in whitespace inside their viewBox (a chevron's path is far narrower than its box), so equal CSS padding can look lopsided. Measure the drawn shapes (`getBBox()` / screenshots zoomed in) and compensate until the visual space on each side matches.
- When adding an element next to existing ones, re-check spacing, alignment, size and weight against its neighbours, and adjust the surrounding padding and gaps so the whole component still feels intentional.
- Verify in the preview with zoomed screenshots of each state before reporting done. Report what you checked.
- If something looks slightly off, fix it before handing back. Do not leave polish for the user to catch.
