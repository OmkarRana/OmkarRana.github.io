---
name: Omkar Rana portfolio
description: A compact neutral engineering profile with a calm reading rhythm.
colors:
  light-background: "#fafafa"
  light-foreground: "#202020"
  light-card: "#ffffff"
  light-primary: "#262626"
  light-secondary: "#efefef"
  light-secondary-foreground: "#424242"
  light-muted-foreground: "#666666"
  light-accent: "#eeeeee"
  light-border: "#e3e3e3"
  light-input: "#d9d9d9"
  light-ring: "#797979"
  light-status: "#207440"
  light-destructive: "#b42318"
  dark-background: "#111111"
  dark-foreground: "#ededed"
  dark-card: "#171717"
  dark-popover: "#222222"
  dark-secondary: "#232323"
  dark-secondary-foreground: "#c7c7c7"
  dark-muted: "#212121"
  dark-muted-foreground: "#a0a0a0"
  dark-accent: "#262626"
  dark-border: "#2b2b2b"
  dark-input: "#383838"
  dark-ring: "#959595"
  dark-status: "#87c998"
  dark-destructive: "#ff8e87"
typography:
  display:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "24px"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "17px"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
spacing:
  1: "4px"
  1.5: "6px"
  2: "8px"
  2.5: "10px"
  3: "12px"
  4: "16px"
  5: "20px"
  section: "68px"
  section-mobile: "54px"
components:
  button-primary:
    backgroundColor: "{colors.dark-foreground}"
    textColor: "{colors.dark-background}"
    rounded: "{rounded.lg}"
    height: "32px"
    padding: "0 10px"
  button-outline:
    rounded: "{rounded.lg}"
    height: "32px"
    padding: "0 10px"
  button-ghost:
    rounded: "{rounded.lg}"
    height: "32px"
    padding: "0 10px"
  button-muted:
    textColor: "{colors.dark-muted-foreground}"
    rounded: "{rounded.lg}"
    size: "36px"
  button-text:
    textColor: "{colors.dark-foreground}"
    padding: "0"
  badge-secondary:
    backgroundColor: "{colors.dark-secondary}"
    textColor: "{colors.dark-secondary-foreground}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  project-card:
    backgroundColor: "{colors.dark-card}"
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.xl}"
    padding: "20px"
  input:
    rounded: "{rounded.lg}"
    height: "32px"
    padding: "4px 10px"
  navigation:
    rounded: "{rounded.md}"
    padding: "0 8px"
  avatar-profile:
    backgroundColor: "{colors.dark-muted}"
    textColor: "{colors.dark-muted-foreground}"
    rounded: "{rounded.lg}"
    size: "64px"
---

# Design System: Omkar Rana portfolio

## Overview

**Creative North Star: "The Quiet Engineering Profile"**

A narrow personal document gives professional experience room to be read. The built interface draws on the supplied Aneesh reference through its neutral palette, small controls, initials avatars and restrained typography. It stays compact without turning the profile into a dashboard.

Light and dark themes share the same geometry. Self-hosted Geist supplies every text role; tonal surfaces and precise spacing carry the hierarchy. Motion acknowledges an entrance or a control state, with immediate keyboard operation and reduced-motion opacity alternatives.

**Key Characteristics:**
- One centered reading column.
- Neutral surfaces with green reserved for employment and availability status.
- Compact shadcn components backed by Base UI.
- Softly squared controls and initials avatars.
- Visible focus and restrained, interruptible state feedback.

## Colors

The palette is achromatic apart from semantic status and error colors. Frontmatter records literal values; runtime semantic properties in `src/app/globals.css` select the theme.

### Primary

The primary action inverts the foreground and background relationship. It is near-white on dark surfaces and charcoal on light surfaces. Green is a status signal, not a general action accent. Destructive colors are present for invalid control states; the page does not currently expose an error flow.

### Neutral

Background is the page canvas; card is a small tonal lift for projects. Foreground carries identity, headings and active navigation. Muted foreground carries summaries, role details and metadata. Secondary surfaces hold technology badges. Border separates the header and footer, while input and ring distinguish fields and focus.

In light mode, muted equals secondary and popover equals card. In dark mode, primary equals foreground and primary foreground equals background. Card and popover text use foreground in both themes. These aliases are not separate palette entries.

**The Status Color Rule.** Use status green only for current employment and availability indicators.

## Typography

**Display and Body Font:** self-hosted Geist Variable, sans-serif fallback. No separate display or mono face is used.

The hierarchy is compact and conversational. Medium weights, slightly tightened headings and muted supporting text distinguish roles without oversized typography.

### Hierarchy

- **Display:** profile name; the frontmatter desktop size reduces to 29px at 600px and 26px at 370px.
- **Headline:** contact heading.
- **Title:** section headings. Profile role also uses 17px, regular weight and muted color; it reduces to 16px on mobile.
- **Body:** base text. The profile summary uses 1.85 line height and a 65ch maximum; mobile summary is 14px. Work bullets are 14px with 1.75 line height, reducing to 13px on mobile.
- **Supporting text:** 13px project descriptions and job roles; 12px metadata and category labels; 11px technology badges; 10px current-status badge and credential ID.
- **Project titles:** 16px, weight 500, line height 1.375. Company titles use 15px, weight 550 and line height 1.4, reducing to 14px on mobile.

**The One Typeface Rule.** Use the same Geist family throughout; express hierarchy through size, weight, tone and spacing.

## Layout

The reading column is `min(680px, calc(100% - 48px))`. At widths up to 600px, gutters become 20px per side; at 370px and below, they become 16px. The sticky opaque header is 66px tall, reducing to 61px on mobile. It shares the column alignment and uses a bottom border rather than a floating container.

The profile starts 66px below the header on desktop and 40px on mobile. Sections use the frontmatter section spacing, with a 25px gap after headings. Work entries have 32px separation and a 53px content indent aligned beneath the employer identity. Skills use a 140px category column, a 17px gap and wrapping badges; on mobile each category stacks above its badges. Projects use a 16px vertical gap and 20px internal spacing.

Navigation stays inline on mobile. Metadata wraps, dates and locations stack, and the download label hides while its accessible icon action remains. The expanded contact panel is at most 480px wide. The page uses scroll padding of 90px and section scroll margins of 24px.

## Elevation & Depth

The visible page is flat: project cards use a tonal background and a one-pixel foreground ring at 10% opacity, not a drop shadow. Controls reveal tonal hover states. Focus rings express interaction state rather than elevation. Tooltips invert foreground and background and sit above the page in a portal. Unused library popup shadow variants are not the page's elevation vocabulary.

**The Quiet Surface Rule.** Preserve the page's tonal hierarchy and fine outlines when extending its existing surfaces.

## Shapes

The base radius is 12px. Actual used derivatives are 6px for small corners, 8px for badges and compact controls, 10px for standard controls and avatars, and 12px for cards. Small green status dots are circular. Outline weights stay at one pixel except focus indicators. Initials supply identity where no portrait or company logo was provided.

## Components

### Buttons

Compact shadcn buttons share medium 14px type, a 10px radius and 150ms CSS color feedback. Default height is 32px, small is 28px, large and icon buttons are 36px; horizontal padding is generally 10px, with icon-side adjustments. Muted buttons carry social, theme and disclosure actions. Ghost carries the resume text action. Outline carries download and email actions; dark outline uses the input color at 30% for its background and 50% on hover. Text buttons are unpadded, 13px, wrap naturally and dim on hover for credential links. The primary button is visibly disabled in the contact placeholder. The library also supplies link, secondary and destructive variants, currently not displayed as active page actions.

Actual primary-pointer presses receive a 0.97 scale through Motion's imperative `animate`, with 140ms timing and the shared easing. Pointer release, cancellation or leaving while pressed restores scale; ordinary pointer leave does not start an animation. Keyboard activation does not trigger press motion. Reduced motion keeps scale at 1 and makes press timing immediate. Disabled buttons are noninteractive at 50% opacity. Button focus uses a three-pixel ring at 50% ring color; general focus uses a two-pixel outline with a five-pixel offset.

### Chips

Technology badges use secondary fill, secondary text, 8px corners and wrapping 11px medium text. Project technology badges use an outline. The current-job badge uses a 10% status fill, status text and 20px height. Badges are labels here, not filters.

### Cards / Containers

Project cards use 12px corners, card fill, a fine ring and 20px spacing. The header stacks title and description; content carries a plain list; the footer contains wrapping technology badges. There is no whole-card click behavior or hover lift.

### Inputs / Fields

Inputs and textarea use 10px corners, a one-pixel input border and 10px horizontal padding. Input height is 32px; textarea minimum height is 64px. Text is 16px below the library's 768px breakpoint and 14px above it. Focus uses the ring treatment. Disabled fields use a translucent input-color fill and 50% opacity. Labels remain explicit. The current form is a disabled, labeled coming-soon disclosure; direct email is the functioning contact action.

### Navigation

Navigation uses 13px muted text, foreground for active/hover, 8px horizontal padding and a 44px minimum height. Four inline links remain visible on mobile. Active section follows scrolling. The theme icon has an accessible name, pressed state and a tooltip delayed by 350ms; the chosen theme is stored locally. Theme changes crossfade icons through Motion's `AnimatePresence` in 150ms, with rotation from -30 degrees to rest and an outgoing +30 degrees, plus a 0.9 scale at the ends. Reduced motion uses a 100ms opacity change without rotation or scaling; keyboard activation is immediate. The palette changes immediately, without a page-wide color animation.

### Identity and experience disclosure

The profile initials avatar is 64px with muted fill and10px corners. Work experience uses the user-installed Chanh Dai `WorkExperience` component: company headers, a connected position timeline,24px briefcase markers, an accessible role/date trigger, Markdown responsibility bullets and persistent skill badges. Missing company logos use the component's neutral dot fallback. The current employer uses the shared status badge. Resume data is adapted in `src/lib/experience.ts`; no separate experience dataset or employment type is fabricated. Numeric month/year dates follow the installed component, with the ongoing role marked Present; derived durations are disabled on this portfolio.

Experience starts expanded. The Chanh Dai double-chevron paths morph in150ms through Motion, with immediate keyboard/reduced-motion behavior. Contact retains its180ms rotating chevron. Both use a shared Motion panel: measured height changes over200ms and opacity over160ms. Shadcn content stays mounted with `hidden={false}` while closed content becomes `aria-hidden` and `inert` immediately. ResizeObserver keeps height current. Keyboard makes panel/icon changes immediate. Reduced motion makes geometry immediate while retaining100ms opacity.

The profile entrance lasts 240ms, moving 6px while opacity changes from 0.8 to 1. Content is visible before animation. Reduced motion replaces translation with a 100ms opacity change from 0.9 to 1. All authored geometric motion uses Motion with shared easing `[0.23, 1, 0.32, 1]`; CSS retains built-in visual color transitions. CSS transitions become immediate with reduced motion, and Tab input makes CSS motion immediate until the next pointer interaction. There is no scroll choreography, reading animation or navigation slide indicator. The sidecar's framework-free component previews show visual states; the Motion runtime behavior is recorded in its extensions rather than replaced with CSS transform animations.

## Do's and Don'ts

### Do:

- **Do** reuse semantic theme properties and the same shadcn components.
- **Do** preserve the centered reading column and responsive gutters.
- **Do** keep green tied to current employment and availability.
- **Do** retain labeled controls, visible focus and reduced-motion behavior.
- **Do** make unavailable actions explicit, as with the disabled contact form.

### Don't:

- **Don't** add a separate display typeface to this interface.
- **Don't** replace compact controls with oversized promotional treatments.
- **Don't** add a portrait, company logo or project destination without supplied evidence.
- **Don't** imply that the contact placeholder sends messages.

Not canonized: the direction brief mentions a 60px avatar; the implementation uses 64px. This document records the shipped value. Press feedback is 140ms Motion, distinct from 150ms CSS color feedback. The reviewer returned ship with no material fixes; no implementation defect is promoted into a design rule.
