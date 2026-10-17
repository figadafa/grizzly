# GRIZZLY Design System v1.1

> Status: Hero direction approved. Implementation has not started.
>
> This document supersedes conflicting visual-direction decisions in
> v1.0 while preserving requirements that remain valid. The approved
> hero mockup is a visual reference, not a flattened asset or a
> pixel-perfect requirement.

## 1. Brand Identity

-   **Brand:** GRIZZLY
-   **Owner:** Figa Brilliant Daffa
-   **Direction:** Controlled Brutalism: clean editorial layout with a
    restrained graffiti signature.
-   **Personality:** Bold, disciplined, technical, creative, and
    distinctive.
-   **Motto:** Terbentur, Terbentur, Terbentur, Terbentuk.
-   **Core principle:** Every significant design decision must have a
    one-line rationale.

### Design philosophy

Editorial design controls hierarchy, readability, and storytelling.
Brutalist influence appears through oversized typography, strong
alignment, contrast, and confident composition. Graffiti is a
distinctive brand signature, not a decoration applied everywhere.

The portfolio should feel personal and recognizable without appearing
visually noisy or sacrificing usability, accessibility, or technical
credibility.

**Rationale:** A clean structure lets the owner's work and identity
stand out while preserving GRIZZLY's street-art character.

## 2. Design Dials

-   **Energy: 3/5.** Use bold typography, contrast, and confident
    composition without making every element compete for attention.
-   **Rhythm: 3/5.** Use intentional asymmetry and varied section
    layouts, supported by consistent alignment and spacing.
-   **Motion: 2/5.** Use restrained, purposeful transitions only when
    they improve feedback or comprehension.

Motion must respect `prefers-reduced-motion` and must not be necessary
to access content.

**Current scope:** No loading intro or full-screen preloader in the
initial implementation. Revisit only after the hero and core page are
complete.

**Rationale:** The initial visit should reveal the portfolio quickly,
with motion serving the content rather than delaying it.

## 3. Color Tokens

-   **Asphalt Black:** `#171717`
-   **Hazard Orange:** `#F36B35`
-   **Concrete Cream:** `#F0EBE2`
-   **Deep Charcoal:** `#242424`
-   **Steel Gray:** `#77736E`

### Usage rules

-   Asphalt Black is the primary foundation.
-   Concrete Cream is the primary readable text color on dark surfaces.
-   Hazard Orange is reserved for purposeful emphasis, selected details,
    and the primary action.
-   Deep Charcoal distinguishes secondary surfaces or subtle image
    framing.
-   Steel Gray is used for supporting details only when contrast is
    sufficient.

Do not use orange for every decorative element. Maintain clear contrast
between content and background. Verify text and interactive-state
contrast against WCAG AA requirements.

**Rationale:** A restrained palette makes orange meaningful and keeps
the interface cohesive.

## 4. Typography

### Proposed type system

-   **Display and headings:** Space Grotesk, bold or semibold.
-   **Body and UI:** Inter, regular to semibold.
-   **Brand signature:** Existing custom GRIZZLY lettering, preferably
    supplied as an SVG or transparent image when available.

Verify font licensing, loading strategy, and fallback behavior before
implementation. Prefer self-hosting fonts when practical; otherwise use
a reliable fallback stack and avoid blocking page rendering.

### Rules

-   Display typography can be oversized, but must remain readable and
    must not cause horizontal overflow.
-   Body text prioritizes legibility.
-   The headline uses uppercase styling and a clear hierarchy.
    `FRICTION.` may use Hazard Orange while the other words use Concrete
    Cream.
-   Graffiti lettering is decorative and must not replace essential
    text.
-   Avoid unnecessary font families, excessive letter spacing, and
    inconsistent type scales.

**Rationale:** Strong editorial type provides the visual impact that
would otherwise be created by excessive decoration.

## 5. Layout System

### Desktop

-   Use a flexible grid, with a 12-column grid as a planning reference
    rather than a rigid requirement.
-   The hero uses an asymmetric two-column composition: text on the
    left, portrait on the right.
-   Keep the wordmark and navigation in a compact top header.
-   Use consistent alignment, intentional negative space, and subtle
    dividers.

### Mobile

-   Reflow content into a single-column layout rather than shrinking the
    desktop composition.
-   Use a compact header and accessible menu control.
-   Keep the headline, portrait, identity, description, and CTA readable
    and ordered logically.
-   Avoid clipping, overlapping content, and horizontal overflow.
-   Aim for interactive targets of at least 44 × 44 CSS pixels where
    practical.

Use consistent spacing tokens and responsive typography. Test at minimum
desktop 1440 × 900, tablet 768 × 1024, mobile 390 × 844, and narrow
mobile 320 × 568.

**Rationale:** A strong composition should adapt to smaller screens
without losing hierarchy or functionality.

## 6. Hero: Approved Direction

### Core content

-   **Wordmark:** GRIZZLY.
-   **Headline:** `BUILT THROUGH FRICTION.`
-   **Owner identity:** Figa Brilliant Daffa.
-   **Role label:** Informatics Student, subject to owner approval.
-   **Supporting copy:** A concise, truthful statement about building
    digital experiences through logic, curiosity, and creativity. Revise
    if the owner prefers different wording.
-   **Motto:** Terbentur, Terbentur, Terbentur, Terbentuk, used as
    supporting narrative rather than a competing headline.
-   **Primary CTA:** `View My Works`, linking to the Selected Works /
    Projects section.
-   **Secondary CTA:** `About Me`, linking to the About section.

Do not invent project counts, performance metrics, credentials,
employment, testimonials, or achievements.

### Desktop composition

1.  Compact header: GRIZZLY wordmark on the left, minimal anchor
    navigation on the right.
2.  Left column: small role/section label, large three-line headline,
    supporting copy, and two clear CTAs.
3.  Lower-left supporting row: social links only when the owner's real
    profile URLs are available; a subtle motto or brand note may sit
    nearby.
4.  Right column: owner's portrait cutout, sized prominently and aligned
    toward the bottom of the hero.
5.  Background: Asphalt Black with subtle texture or grain. Keep
    decorative elements sparse.

### Portrait treatment

-   Use the owner's supplied portrait/cutout asset, not an AI-generated
    substitute.
-   Preserve recognizable facial features, body proportions, and
    clothing details.
-   Keep the existing orange outline if it remains clean at normal
    display size; adjust its thickness only after browser review.
-   A subtle shadow or restrained grain may be used. Do not stack
    multiple filters or add excessive paint marks around the subject.
-   Keep the portrait as a separate image asset from the background and
    text.

### Graffiti usage in the hero

-   Keep the GRIZZLY wordmark as the main graffiti signature.
-   Use at most one or two restrained orange paint/claw accents near the
    portrait or composition edge.
-   Avoid large graffiti marks behind the headline, busy spray effects,
    multiple competing outlines, or decorative marks that reduce
    readability.
-   Do not use a flattened mockup image as the live hero.

### Mobile composition

-   Keep the wordmark and menu at the top.
-   Present the headline and supporting copy before the portrait,
    followed by the identity and CTA in a clear flow.
-   The portrait may be centered and cropped within the available width,
    but must preserve the full relevant subject and avoid awkward
    clipping.
-   Keep the primary CTA prominent and make both CTA destinations
    functional.
-   If the desktop layout's decorative accents make the mobile screen
    crowded, remove or reduce them rather than shrinking the content.

**Rationale:** The hero should be immediately understandable, visually
memorable, and usable on both desktop and mobile.

## 7. Graffiti, Texture, and Brand Motif

-   Develop and preserve the recognizable GRIZZLY wordmark.
-   An abstract claw or bear-inspired secondary motif may be explored,
    but is optional.
-   Use halftone, grain, stencil, or spray textures selectively.
-   Keep decorative artwork away from essential text, buttons, and
    navigation.
-   Avoid random graffiti, excessive distress, visual noise, and effects
    that make the site feel less professional.

**Rationale:** A small number of deliberate signature elements is more
memorable than decoration across every surface.

## 8. Navigation and Information Architecture

Initial version: single-page anchor navigation.

Sections: 1. Hero 2. About 3. Selected Works 4. Education and Experience
5. Contact

Use semantic section IDs and meaningful link labels. Provide keyboard
navigation, visible focus states, and appropriate reduced-motion
behavior.

The header should remain minimal. A mobile menu must open and close
reliably, expose its state to assistive technology, and close after a
navigation link is selected.

Multi-page routing can be introduced later if project case studies
require independent pages.

**Rationale:** A simple single-page structure makes the first release
easier to navigate and implement.

## 9. Project Presentation

-   Use asymmetric editorial compositions while keeping project
    information easy to scan.
-   Prioritize real, verifiable projects.
-   Include problem, role, implementation, technology, and actual
    outcomes where available.
-   Do not invent project details, metrics, credentials, or
    testimonials.
-   Every project action must lead to a real destination or a clearly
    identified unavailable state.
-   Do not show empty project cards merely to fill space.

**Rationale:** The portfolio must demonstrate real work, not just visual
styling.

## 10. Accessibility and Performance

-   Use semantic HTML and a logical heading hierarchy.
-   Maintain visible keyboard focus.
-   Meet WCAG AA contrast requirements.
-   Provide meaningful image alternatives; decorative images should have
    empty alt text.
-   Ensure keyboard and touch navigation work.
-   Optimize image dimensions and formats without visibly degrading the
    portrait.
-   Avoid unnecessary dependencies.
-   Respect `prefers-reduced-motion`.
-   Do not use animations that block access to content.
-   Avoid layout shifts and prevent horizontal overflow.
-   Test the actual page in the browser at desktop and mobile sizes.

**Rationale:** Accessibility and performance are baseline requirements,
not later polish.

## 11. Anti-Patterns

-   No generic blue-purple gradients without a justified brand purpose.
-   No excessive glassmorphism.
-   No fake statistics or testimonials.
-   No non-functional buttons or placeholder social URLs in the
    published site.
-   No generic template layout.
-   No unnecessary animation or decoration.
-   No fabricated project content.
-   No em dashes in generated copy.
-   No unnecessary packages, frameworks, or dependencies.
-   No loading intro in the initial implementation.
-   No text embedded in a flattened hero image.
-   No replacing the owner's real portrait with an invented AI portrait.

## 12. Initial Implementation Scope

The first implementation task is the hero section only.

Included: - Responsive header and navigation. - Headline, role label,
supporting copy, and CTA links. - Owner-provided portrait asset. - Dark
background, subtle texture, and restrained orange accents. - Mobile
navigation behavior. - Keyboard focus, semantic structure,
reduced-motion compatibility, and responsive checks.

Excluded for now: - Loading intro. - Full About, Projects, Experience,
and Contact section implementations. - Backend, CMS, or admin
dashboard. - Invented project data or social profile URLs. - Complex
animation libraries unless a demonstrated requirement justifies one.

### Implementation workflow

Follow the project workflow: **INSPECT → PLAN → REVIEW → IMPLEMENT →
AUDIT**

Before implementation: 1. Inspect the current repository, `README.md`,
this file, Git status, and existing assets. 2. Confirm the real portrait
asset's path and transparency. 3. Propose a minimal plan for the hero
only. 4. Wait for explicit approval before editing files or installing
dependencies.

After approval: 1. Implement only the approved hero scope. 2. Run the
available build and lint checks; report any checks that could not be
run. 3. Review browser screenshots at desktop and mobile sizes. 4. Fix
overflow, clipping, contrast, focus, and navigation issues. 5. Summarize
files changed and remaining limitations. 6. Do not commit or push unless
explicitly asked.

## 13. Quality Gate

Before the hero is considered complete, verify:

-   [ ] The approved Controlled Brutalism direction is maintained.
-   [ ] The headline is exactly `BUILT THROUGH FRICTION.`
-   [ ] The owner's supplied portrait is used and remains recognizable.
-   [ ] The desktop hero places text left and portrait right.
-   [ ] The mobile layout reflows without overflow or clipping.
-   [ ] Navigation and CTA links have valid destinations or are clearly
    marked as not yet available.
-   [ ] No placeholder social links remain in the published version.
-   [ ] Contrast, keyboard focus, semantic structure, and reduced-motion
    behavior are checked.
-   [ ] Typography licensing and fallback behavior are verified.
-   [ ] The loading intro remains out of scope.
-   [ ] The browser result has been reviewed against the approved
    mockup.
-   [ ] Every major design decision has a written rationale.
