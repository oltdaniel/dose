---
name: Greg
description: A quiet personal site for writing.
colors:
  paper: "#f5f3ed"
  ink: "#292821"
  muted: "#625f56"
  rule: "#d7d4cb"
  selection: "#ded8c9"
  focus: "#785b36"
typography:
  body:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  display:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  article-title:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.3
  label:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
components:
  article-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0.9rem 0"
---

## Overview

**Creative North Star: "A Quiet Typed Index"**

The site puts the writing first. A warm, steady page and one column of
typewritten text replace the previous theme's chips, decorative separators,
and theme switch.

The layout stays conventional and easy to scan: a name, a heading, article
links, and an author note with optional contact links at the bottom. Restraint
is the design's defining choice; the interface should recede while the writing
and its author remain easy to find.

**Key Characteristics:**
- Warm off-white ground with near-black type.
- Courier Prime used for headings and running text.
- One narrow column, fine rules, and square article markers.
- No shadows, rounded cards, decorative icons, or dark-mode controls.

## Colors

- **Paper (`#f5f3ed`):** the fixed page ground.
- **Ink (`#292821`):** headings and primary copy.
- **Muted (`#625f56`):** dates and secondary copy.
- **Rule (`#d7d4cb`):** thin list and footer separators.
- **Selection (`#ded8c9`):** text selection.
- **Focus (`#785b36`):** keyboard focus outline.

The page remains light regardless of system theme. Links inherit the ink color
and remain underlined.

## Typography

Courier Prime is self-hosted in regular and bold weights. The body uses
`1rem` type with `1.65` line-height. The site name is `1.5rem`; section
headings are `1.35rem`; article titles are `1.75rem` on wider screens and
`1.5rem` on narrow screens. Dates and small supporting text use `0.875rem`.

The reading column is capped at `68ch`. Use the typewriter face for both
headings and body copy; do not introduce a contrasting display family.

## Layout

Use one centered column with a maximum measure of `68ch`. The page shell leaves
`3rem` of total horizontal space on wider screens and `2rem` below `36rem`
(split evenly on both sides). The homepage is a direct list, with dates
alongside titles on wider screens and below them on narrow screens. The footer
follows the page content and stays separated by one thin rule.

## Elevation & Depth

The interface is flat. It uses no shadows, gradients, or layered surfaces.
Thin rules establish separation without creating cards.

## Shapes

The article list uses a small outlined square marker. Components have square
corners; there are no rounded cards or pills.

## Components

### Article links

Each article occupies a single full-row link. A small outlined square,
underlined title, and optional date are arranged in one line; on narrow
screens the date moves below the title. Rows are divided by a thin rule.

### Footer

The footer contains the author's name, the explicit role value, and one short
about line. Email and social links appear only when configured; there are no
default or placeholder destinations.

### Navigation

The site name links to the homepage. Article pages provide a plain “All
writing” link. All links use visible underlines and a clear keyboard focus
outline.

## Do's and Don'ts

### Do:
- **Do** keep article discovery to a plain list of titles and dates.
- **Do** keep the warm paper ground and typewriter typography consistent.
- **Do** use semantic links, visible focus, and comfortable line spacing.
- **Do** add contact or social links only from real site configuration.

### Don't:
- **Don't** add cards, pills, decorative separators, or unnecessary metadata.
- **Don't** add a dark theme or a theme switch.
- **Don't** add imagery or icons unless the content itself requires them.
- **Don't** use a different font for display text.
