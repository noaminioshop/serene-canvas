

# Interactive Presentation App: "Home Design: Serenity and Peace"

## Overview
A Hebrew RTL presentation viewer and editor with 24 pre-populated slides, design mode, dark/light theme, and localStorage persistence.

## Design System
- **Font:** Assistant (Google Font), RTL-first
- **Palette:** Cream background (#F5F5F0), dark navy text (#2C3E50), sage accent (#8FAD88)
- **Style:** Rounded-[32px] slide containers, glassmorphism controls, no hard borders — shadows only
- **Motion:** Framer Motion for all transitions (slide changes, mode toggles)

## Core Features

### 1. Presentation Viewer
- Centered slide canvas at 1920×1080, scaled to fit viewport
- Bottom navigation (Previous/Next) with keyboard arrow support
- Top bar: title, slide counter ("5 / 24"), theme toggle, design mode toggle (pencil icon)
- Fullscreen mode via toolbar button or F5

### 2. Seven Slide Layouts
- **Title Slide** — centered title + subtitle + accent divider
- **Two-Column** — text + image grid
- **Three-Column Cards** — 3 cards with hover lift
- **Quote** — large styled quote with attribution
- **Comparison Table** — styled rows, no harsh borders
- **Full-Image** — bleed image with text overlay
- **Closing** — centered content with contact info

### 3. Design Mode
Activated via pencil icon toggle. The slide scales to ~70% and panels appear:
- **Left sidebar (RTL = right visually):** scrollable slide thumbnails, add/delete buttons
- **Right panel:** editable fields (title, subtitle, body, image URL, layout dropdown, color pickers), with live preview below
- All edits save to localStorage automatically

### 4. Dark Mode
Full dark theme toggle affecting both viewer and editor, using CSS custom properties.

## Pre-populated Content
All 24 slides as specified — slides 1-12 (morning routine section) and slides 13-24 (home design philosophy section), all in Hebrew.

## Technical Approach
- React + TypeScript + Tailwind CSS + Framer Motion
- Slide state managed via React context, persisted to localStorage
- Scaled slide rendering (1920×1080 base with CSS transform)
- RTL via `dir="rtl"` on root wrapper

