# Fidelio Digital - ARIA-Compliant Website

## Overview
This is a multi-page, accessibility-focused website for Fidelio Digital, a fictional game development studio. Built with vanilla HTML, CSS, and JavaScript, the project showcases ARIA compliance, semantic HTML5, and interactive features without relying on frameworks.

**Live Site**: Originally hosted at https://evanklem.github.io/ARIA-Basic-Site/

## Project Structure
```
.
├── index.html          # Home page
├── games.html          # Games gallery with carousel
├── contact.html        # Contact form with validation
├── faq.html           # FAQ with accordion functionality
├── css/
│   └── style.css      # Main stylesheet
├── javascript/
│   ├── validation.js  # Form validation logic
│   ├── gallery.js     # Game gallery carousel
│   └── faq.js         # FAQ accordion
├── images/            # Website assets (logo, games, background)
└── server.py          # Python HTTP server for development
```

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Accessibility**: ARIA attributes, semantic HTML
- **Server**: Python 3.11 HTTP server (for development)

## Features
- ✅ Fully accessible with ARIA attributes
- ✅ Responsive design
- ✅ Interactive game gallery carousel
- ✅ Form validation with user feedback
- ✅ FAQ accordion interface
- ✅ No framework dependencies

## Development
The site runs on a simple Python HTTP server bound to `0.0.0.0:5000` with cache-control headers to prevent caching issues during development.

## Key Learnings
This project demonstrates:
- Building dynamic web applications with vanilla JavaScript
- Applying semantic HTML5 and ARIA attributes for inclusivity
- Integrating custom digital assets
- Programmatic form validation and event handling

## Recent Changes
- **2025-10-06**: Initial Replit setup
  - Added Python HTTP server with cache-control headers
  - Configured workflow for port 5000
  - Created project documentation
  - Added .gitignore for Python artifacts
