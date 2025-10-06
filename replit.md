# Fidelio Digital - ARIA-Compliant Website

## Overview
This is a modernized, multi-page, accessibility-focused website for Fidelio Digital, a fictional indie game development studio. Built with vanilla HTML, CSS, and JavaScript, the project showcases ARIA compliance, semantic HTML5, modern responsive design, and interactive features without relying on frameworks.

**Original Site**: https://evanklem.github.io/ARIA-Basic-Site/

## Project Structure
```
.
├── index.html          # Home page with hero, features, projects, blog preview
├── about.html          # About page with mission, team bio, skills, timeline
├── games.html          # Games gallery with interactive carousel
├── projects.html       # Projects showcase (9 project cards)
├── blog.html           # Blog with sample development posts
├── contact.html        # Contact form with validation
├── faq.html           # FAQ with accordion functionality
├── css/
│   └── styles.css     # Modern CSS with custom properties, Grid/Flexbox
├── javascript/
│   └── main.js        # ES module with all interactive functionality
├── images/            # Website assets (logo, games, background)
└── server.py          # Python HTTP server for development
```

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES Modules)
- **Accessibility**: ARIA attributes, semantic HTML, skip links, keyboard navigation
- **Design**: CSS Grid, Flexbox, Custom Properties, Mobile-first responsive
- **Server**: Python 3.11 HTTP server (for development)

## Features

### Accessibility (WCAG AA Compliant)
- ✅ Skip links on all pages
- ✅ ARIA landmarks and live regions
- ✅ `aria-expanded` on interactive elements
- ✅ Full keyboard navigation support
- ✅ `:focus-visible` styles for keyboard users
- ✅ Form labels with `for` attributes
- ✅ Meaningful alt text on images
- ✅ `prefers-reduced-motion` support
- ✅ Semantic HTML5 structure

### Design & UX
- ✅ Modern, clean dark theme with high contrast
- ✅ Mobile-first responsive design
- ✅ Hamburger menu for mobile navigation
- ✅ Fluid typography using `clamp()`
- ✅ Card-based layout system
- ✅ Lazy-loading images
- ✅ System font stack (no external fonts)
- ✅ CSS custom properties for theming
- ✅ Smooth animations (respecting motion preferences)

### Interactive Features
- ✅ Responsive hamburger navigation with `aria-expanded`
- ✅ FAQ accordion with keyboard support
- ✅ Game gallery carousel
- ✅ Contact form with client-side validation
- ✅ Accessible error messages with `aria-live`
- ✅ Progressive enhancement (works without JS)

## Development
The site runs on a simple Python HTTP server bound to `0.0.0.0:5000` with cache-control headers to prevent caching issues during development.

### Key Technologies Used
- **CSS Grid & Flexbox** for modern layouts
- **CSS Custom Properties** for maintainable theming
- **ES Modules** for clean, modular JavaScript
- **Mobile-First** breakpoint strategy
- **No external dependencies** - pure vanilla code

## Content Notes
- All demo/sample content is clearly labeled with badges
- Author bios, project descriptions, and blog posts are marked as sample content
- Contact form includes disclaimer that it's for demo purposes only

## Recent Changes
- **2025-10-06**: Major modernization update
  - Converted to modern CSS with custom properties and Grid/Flexbox
  - Created ES module architecture for all JavaScript
  - Added skip links and enhanced ARIA support
  - Implemented responsive hamburger navigation
  - Created new pages: about.html, projects.html, blog.html
  - Expanded homepage with hero, features, and content sections
  - Added mobile-first responsive design
  - Implemented accessibility features (keyboard nav, focus styles, motion preferences)
  - Added timeline, skills, and enhanced content throughout
  - All pages now use semantic HTML5 structure
  - Maintained all existing images and game content

## User Preferences
- System font stack preferred (no Google Fonts)
- Dark theme with high contrast for readability
- Accessibility-first approach
- No external frameworks or libraries
- Clean, minimal design aesthetic
