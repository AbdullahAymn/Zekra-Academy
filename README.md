# Zekra Academy Quran Platform

## Overview
A modern web application for Zekra Academy - a specialized Quran memorization and teaching platform. Built with Next.js, this responsive website showcases the academy's services, features, and contact information while maintaining Islamic aesthetic values.

## Key Features
- 🕌 Responsive design with Arabic language support
- 📖 Interactive Quran learning program displays
- 📱 WhatsApp integration for instant communication
- 📬 Multiple contact channels (phone, email, contact form)
- 🎨 Islamic-inspired design system with:
  - Custom Arabic font support (Alexandria)
  - Soothing color palette (#3D4D4A, #05846D, #F9F9F9)
  - Optimized typography hierarchy
- 📚 Comprehensive program sections:
  - Age-specific learning paths
  - Intensive Tajweed courses
  - Ijazah certification programs
  - Progress tracking system

## Technical Components

### Core Structure
- `layout.js`: Main app structure with font configuration
- `page.js`: Primary page composition

### Key Components
| Component       | Functionality                                 |
|-----------------|-----------------------------------------------|
| `Main`          | Hero section with CTA and academy overview    |
| `Nav`           | Responsive navigation with logo and WhatsApp  |
| `Contact`       | Multi-channel contact section with SVG icons  |
| `Packages`      | Program packages and pricing display          |
| `Rates`         | Student testimonials and success stories      |

## Technology Stack
- ⚛️ React 19.0.0 + Next.js 15.1.7 App Router
- 🎨 Tailwind CSS with custom configuration
- 📱 Responsive breakpoints (mobile-first approach)
- 🖼️ Optimized image handling
- 📄 Metadata optimization for search engines

## Font Configuration
```js
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "400", "500", "600", "700", "900"]
});
```
- Uses Alexandria font family for Arabic text
- Work Sans as secondary font for supporting content

## Color Scheme
| Purpose         | Hex Code       | Usage Example                      |
|-----------------|---------------|------------------------------------|
| Primary         | `#3D4D4A`     | Buttons, Headings                  |
| Secondary       | `#05846D`     | Accents, Hover states              |
| Background      | `#F9F9F9`     | Section backgrounds                |
| Text Primary    | `#101828`     | Main content                       |
| Text Secondary  | `#475467`     | Subtitles and descriptions         |
| White           | `#FFFFFF`     | Icon backgrounds, Card surfaces    |
| WhatsApp Accent | `#5AA794`     | WhatsApp brand elements            |

## Component Implementation

### SVG Integration
- Custom designed SVG icons for contact methods
- Dynamic icon coloring through Tailwind CSS classes
- Optimized SVG paths for rendering performance

### Responsive Practices
- Mobile-first grid layouts with Tailwind's breakpoint system
- Fluid typography scaling using viewport units
- Conditional element stacking on mobile views

### WhatsApp Integration
- Direct deep linking to WhatsApp business API
- Pre-formatted message templates
- Device-aware URL handling (`https://wa.me/`)

## Image Optimization
- Next.js static image optimization
- Lazy loading for below-the-fold content
- WebP format conversion for faster loading
- Dynamic image quality based on viewport size
