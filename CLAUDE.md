# CLAUDE.md - AI Assistant Guide for Alex Fracazo's Portfolio

## Project Overview

This is a **static portfolio website** for Alex Fracazo, a Product Designer based in Sydney, Australia. The site showcases product design case studies, professional experience, and contact information.

**Website**: https://fracazoportfolio.github.io/
**Last Updated**: Mon Mar 25 2024
**Technology**: Webflow-generated static site hosted on GitHub Pages

---

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup generated from Webflow
- **CSS3**: Custom properties, Flexbox, Grid layouts
- **JavaScript**: jQuery 3.5.1 + Webflow.js for interactions
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Hosting**: GitHub Pages

### Important Notes
- **No Build Process**: This is a static site with no npm/build pipeline
- **Webflow Export**: Site was created in Webflow and exported as static files
- **No Package Manager**: No package.json, npm, or yarn dependencies
- **Direct Deployment**: Changes pushed to main branch are automatically deployed via GitHub Pages

---

## Project Structure

```
/
├── index.html                  # Homepage (hero, about, strengths, case studies, testimonials)
├── contact.html                # Contact form page
├── experiments.html            # Prototypes and experiments showcase
├── work.html                   # Work/projects overview
├── 404.html                    # Custom 404 error page
├── 401.html                    # Custom 401 error page
│
├── case-studies/
│   ├── bringing-visibility-to-workers-status.html  # Hireup case study
│   ├── eta-app.html                                # Australian ETA Visa app
│   ├── qantas-app.html                             # Qantas Airways app
│   ├── qantas-entertainment-app.html               # Qantas Entertainment
│   └── case-study-template.html                    # Template for new case studies
│
├── css/
│   ├── normalize.css                               # CSS reset
│   ├── webflow.css                                 # Webflow base styles
│   └── alex-fracazo-product-designer.webflow.css   # Custom site styles
│
├── js/
│   └── webflow.js                                  # Webflow interactions (large file)
│
├── images/                     # All image assets (PNG, JPG, SVG, GIF, WebP)
│   ├── logo.svg
│   ├── favicon.svg
│   ├── webclip.svg
│   └── [case study images and icons]
│
└── information/
    └── style-guide.html        # Design system reference
```

---

## Design System

### Color Palette (CSS Custom Properties)
```css
--gray-600: #3e4246;        /* Primary text color */
--white: white;             /* White backgrounds and text */
--primary-600: #414f97;     /* Primary brand color (blue) */
--midnight-blue: #141327;   /* Dark background */
--gray-200: #babfc7;        /* Light gray */
--gray-100: #eff2f5;        /* Very light gray backgrounds */
--primary-800: #2348ff;     /* Bright accent blue */
--gray-400: #929aa0;        /* Medium gray */
```

### Typography
- **Primary Font**: Plus Jakarta Sans (200, 300, 400, 500, 600, 700, 800 weights)
- **Base Font Size**: 16px
- **Base Line Height**: 24px

### Key CSS Classes
- `.h1`, `.h2`, `.h3`, `.h4` - Heading styles
- `.text` - Body text
- `.small-text` - Smaller text (captions, metadata)
- `.primary-button`, `.secondary-button` - CTA buttons
- `.nav-link` - Navigation links
- `.link-hover-ix` - Links with hover interactions
- `.container` - Main content container
- `.section` - Full-width sections

---

## Key Features & Interactions

### 1. Custom Cursor
The site implements a custom cursor with two elements:
- `.cursor-dot` - Small dot that follows the cursor
- `.cursor-circle` - Larger circle for hover effects
- **Note**: Disabled on tablets/iPads via media queries

### 2. Animations
- Fade-in animations using `data-w-id` and inline `opacity:0` styles
- Webflow.js handles scroll-triggered animations
- Smooth transitions on hover states

### 3. Navigation
- Fixed navigation bar (`.navigation`)
- Sticky behavior on scroll
- Mobile menu toggle (`.menu-button`)
- Three main nav items: Home, Work, Say hi!

### 4. Case Study Pages
All case study pages follow a consistent structure:
1. Hero section with title, metadata (Product, Date, Role)
2. Summary card with bookmark icon
3. "The Work" section with rich text content
4. Images and diagrams illustrating the design process
5. Relative paths to assets: `../css/`, `../images/`

---

## Development Guidelines for AI Assistants

### When Making Changes

#### HTML Editing
1. **Preserve Webflow attributes**: Never remove `data-w-id`, `data-wf-page`, or `data-wf-site` attributes
2. **Maintain structure**: Keep the nested div structure intact for Webflow animations
3. **Use semantic HTML**: Follow existing patterns for consistency
4. **Image paths**: Use relative paths (`images/` from root, `../images/` from subdirectories)
5. **Navigation**: All pages should have consistent navigation with correct relative paths

#### CSS Editing
1. **Use existing classes**: Don't add new custom classes unless absolutely necessary
2. **CSS custom properties**: Use existing color variables for consistency
3. **Responsive design**: Check changes work across breakpoints
4. **Don't modify**: `normalize.css` and `webflow.css` (Webflow core files)
5. **Custom styles**: Add to `alex-fracazo-product-designer.webflow.css`

#### Adding New Case Studies
1. **Copy template**: Use `case-studies/case-study-template.html` as starting point
2. **Update metadata**: Change `<title>`, `data-wf-page`, and meta tags
3. **Add to homepage**: Include new case study card in `index.html` work section
4. **Optimize images**: Use WebP format with responsive srcset attributes
5. **Relative paths**: Use `../` prefix for assets (CSS, JS, images)

#### Images & Assets
1. **Format priority**: WebP > PNG > JPG for photos, SVG for icons/logos
2. **Responsive images**: Use `srcset` with multiple sizes (500w, 800w, 1080w, 1600w, 2000w)
3. **Lazy loading**: Add `loading="lazy"` attribute to all images
4. **Alt text**: Always provide descriptive alt text for accessibility
5. **File naming**: Use kebab-case with descriptive names

### What NOT to Do

❌ **DO NOT**:
- Remove or modify Webflow data attributes (`data-w-id`, `data-wf-*`)
- Add npm/build tools (this is intentionally a static site)
- Modify `webflow.js` (it's a compiled Webflow file)
- Change the grid structure or layout systems
- Add external CSS frameworks (Bootstrap, Tailwind, etc.)
- Use absolute positioning unless matching existing patterns
- Add JavaScript that conflicts with Webflow.js
- Modify the custom cursor implementation on tablets

✅ **DO**:
- Keep the site static and lightweight
- Use existing CSS classes and patterns
- Maintain consistency with the design system
- Test responsive behavior across breakpoints
- Preserve accessibility features (ARIA labels, semantic HTML)
- Use relative paths for all resources
- Optimize images before adding them

---

## Git Workflow

### Branch Strategy
- **Main branch**: Production branch (auto-deploys to GitHub Pages)
- **Feature branches**: Use descriptive names starting with `claude/` for AI-assisted changes
- **No staging environment**: Changes to main go live immediately

### Commit Message Conventions
Based on recent history, keep commits simple and descriptive:
- "Update [feature/page name]"
- "Fix [specific issue]"
- "Add [new content/feature]"

Examples from history:
- "Updating about me photo"
- "Fixing z-index bugs"
- "Update contact.html"

### Deployment
1. Changes pushed to `main` branch
2. GitHub Pages automatically rebuilds (usually within 1-2 minutes)
3. Site accessible at: https://fracazoportfolio.github.io/

---

## Common Tasks

### Adding a New Case Study
```bash
# 1. Copy the template
cp case-studies/case-study-template.html case-studies/new-case-study.html

# 2. Edit the new file with case study content
# 3. Add images to images/ directory
# 4. Update index.html to add the case study card

# 5. Commit and push
git add .
git commit -m "Add new case study: [Project Name]"
git push origin main
```

### Updating Contact Information
- Email: Hardcoded in `contact.html` and `index.html`
- Current email: fracazo@duck.com
- Social links: LinkedIn, Twitter in footer and about section

### Fixing Broken Links
1. Check relative paths from current page location
2. Root pages use: `images/`, `css/`, `js/`
3. Subdirectory pages use: `../images/`, `../css/`, `../js/`
4. Test all navigation links after changes

### Updating Styles
1. Edit `css/alex-fracazo-product-designer.webflow.css`
2. Use existing CSS custom properties for colors
3. Follow existing naming conventions
4. Test across breakpoints (mobile, tablet, desktop)

---

## Testing Checklist

Before committing changes, verify:

- [ ] All links work (internal navigation)
- [ ] Images load correctly with proper paths
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Animations still function (scroll effects, hover states)
- [ ] Custom cursor works on desktop (hidden on tablets)
- [ ] No console errors in browser DevTools
- [ ] Webflow data attributes preserved
- [ ] Contact form still functional
- [ ] Meta tags and SEO information correct
- [ ] Social media preview images load

---

## Important Files Reference

### Must-Read Files
- `index.html` - Homepage structure and main content
- `css/alex-fracazo-product-designer.webflow.css` - All custom styles
- `case-studies/case-study-template.html` - Template for new case studies

### Reference Files
- `information/style-guide.html` - Design system documentation
- Recent case studies - Examples of content structure and formatting

### Do Not Edit
- `css/normalize.css` - Third-party CSS reset
- `css/webflow.css` - Webflow core styles
- `js/webflow.js` - Webflow compiled interactions (87k+ lines)

---

## Accessibility Considerations

The site implements several accessibility features:

1. **Semantic HTML**: Proper use of `<nav>`, `<header>`, sections
2. **ARIA labels**: `role="banner"`, `role="navigation"`, etc.
3. **Alt text**: All images should have descriptive alt attributes
4. **Keyboard navigation**: Links and buttons are keyboard accessible
5. **Focus states**: Maintained on interactive elements
6. **Responsive text**: Readable at all viewport sizes
7. **Color contrast**: Meets WCAG standards for text/background

When making changes, maintain or improve accessibility:
- Add `alt` attributes to new images
- Keep logical heading hierarchy (h1 → h2 → h3)
- Ensure links have descriptive text (avoid "click here")
- Test keyboard navigation
- Check color contrast for new text colors

---

## SEO & Meta Information

### Homepage Meta Tags
- **Title**: "Alex Fracazo Product Designer - Sydney Australia"
- **Description**: "Hi there, I'm Alex Fracazo. Product Designer, designing user and business face products that are innovative, aesthetically appealing, and highly usable."
- **OG Image**: `/images/opengraph.jpg`

### Case Study Pages
Each case study has unique:
- Title (e.g., "hireup case study")
- OG/Twitter images specific to the project
- Proper canonical URLs

**Note**: When adding content, always update:
1. `<title>` tag
2. Meta description
3. Open Graph tags (og:title, og:description, og:image)
4. Twitter Card tags

---

## Known Issues & Limitations

### Webflow Constraints
- Cannot easily modify animations without re-exporting from Webflow
- Layout changes should respect Webflow's generated structure
- Some CSS classes are auto-generated and cryptic

### Contact Form
- Uses Webflow's form handling (method="get")
- Not connected to a backend (may need integration)
- Success/error messages are Webflow-generated

### Performance
- `webflow.js` is large (~88k lines, could impact load time)
- Some images could be further optimized
- Multiple font weights loaded (consider subsetting)

### Browser Support
- Custom cursor disabled on tablets/iPads
- Animations may not work in older browsers
- Relies on modern CSS features (custom properties, Grid)

---

## Contact & Acknowledgments

**Designer/Owner**: Alex Fracazo
**Email**: fracazo@duck.com
**LinkedIn**: linkedin.com/in/fracazo
**Twitter**: twitter.com/fracazo

**Land Acknowledgment**: The site includes an acknowledgment to the Bidjigal and Gadigal people of the Eora nation (traditional owners of the eastern Sydney coastal area).

**Privacy**: Site collects no data or analytics (stated in footer)

---

## Quick Reference Commands

```bash
# View site structure
ls -R

# Search for specific content
grep -r "search term" *.html

# Check image sizes
du -sh images/*

# View recent commits
git log --oneline -10

# Check git status
git status

# Push changes to production
git push origin main

# View all HTML files
find . -name "*.html"
```

---

## Version History

- **Mar 25, 2024**: Latest Webflow export
- **Current commit**: d7e3045 - "Updating about me photo"
- **Previous updates**: z-index fixes, contact page updates, email changes

---

## Notes for Future AI Assistants

1. **Static First**: This site is intentionally simple. Don't suggest adding React, Vue, or build tools.
2. **Webflow DNA**: Respect the Webflow-generated structure. Don't try to "clean up" the HTML.
3. **Performance**: Keep the site fast and lightweight. Every addition should be justified.
4. **Consistency**: Follow existing patterns. If there's a similar feature, copy that approach.
5. **Testing**: Always test changes locally if possible before pushing to main.
6. **Respect the Design**: Alex is a product designer. Maintain the high design standards throughout.

---

**Last Updated**: 2025-11-24
**Document Version**: 1.0
**Maintained by**: AI assistants working with this repository
