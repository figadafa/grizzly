# GRIZZLY Design System v1.0

## 1. Brand Identity

- Brand: GRIZZLY
- Owner: Figa Brilliant Daffa
- Direction: Brutalist Editorial × Graffiti
- Personality: Bold, raw, experimental, disciplined, technical
- Motto: Terbentur, Terbentur, Terbentur, Terbentuk
- Core principle: Every significant design decision must have a one-line rationale.

### Design philosophy

Brutalism defines the structure. Editorial design defines the hierarchy and storytelling. Graffiti provides a distinctive brand signature.

The portfolio must communicate personality without sacrificing usability, accessibility, or technical credibility.

## 2. Design Dials

- Energy: 3, expressed through bold typography, strong contrast, and confident composition.
- Rhythm: 3, expressed through intentional asymmetry and varied section layouts.
- Motion: 2, expressed through restrained transitions and purposeful scroll reveals.

Motion must respect prefers-reduced-motion and must not be necessary to access content.

## 3. Color Tokens

- Asphalt Black: #171717
- Hazard Orange: #F36B35
- Concrete Cream: #F0EBE2
- Deep Charcoal: #242424
- Steel Gray: #77736E

Rules:
- Asphalt Black is the primary dark foundation.
- Concrete Cream supports readability and creates visual breaks.
- Hazard Orange is reserved for purposeful emphasis and primary actions.
- Deep Charcoal distinguishes secondary surfaces.
- Steel Gray is used for supporting details only when contrast is sufficient.

Verify text and interactive-state contrast against WCAG AA requirements.

## 4. Typography

Proposed:
- Display and headings: Space Grotesk.
- Body text: Inter.
- Graffiti signature: custom SVG lettering or a restrained decorative font.

Verify font licensing, loading strategy, and fallback behavior before implementation.

Rules:
- Display typography may be oversized but must remain readable.
- Body text must prioritize legibility.
- Graffiti lettering is decorative, not a replacement for essential text.
- Avoid unnecessary font families and inconsistent type scales.

## 5. Layout System

Desktop:
- Flexible 12-column grid.
- Intentional asymmetry.
- Strong alignment, borders, and section separation.

Mobile:
- Mobile-first single-column content flow.
- Compact navigation.
- Responsive typography and images.
- Minimum 44 × 44 CSS pixel interactive targets where practical.

Use deliberate spacing and consistent design tokens. Prevent horizontal overflow, overlapping content, and clipped controls.

## 6. Hero

Headline proposal: BUILT THROUGH FRICTION.

Supporting identity:
- Figa Brilliant Daffa.
- Informatics Student, subject to owner approval.
- Original motto retained.

Portrait:
- Use the owner's actual photograph.
- Prefer a clean cutout with restrained halftone or grain.
- Preserve recognizable facial features.
- Avoid excessive distortion, artificial facial changes, and unnecessary filters.

Desktop:
- Editorial headline with portrait on the right.
- Identity and primary CTA in a clearly structured area.
- Motto as a supporting narrative element.

Mobile:
- Headline first, portrait below, then identity and CTA.
- Reflow the layout rather than shrinking the desktop composition.
- Keep the menu and all actions accessible.

The primary CTA navigates to the Projects section.

## 7. Graffiti and Texture

- Develop a recognizable GRIZZLY wordmark.
- Explore an abstract claw or bear-inspired secondary motif.
- Use halftone, grain, stencil, or spray textures selectively.
- Keep decorative artwork away from essential text and controls.
- Avoid random graffiti, excessive distress, and visual noise.

## 8. Navigation and Information Architecture

Initial version: single-page anchor navigation.

Sections:
1. Hero
2. About
3. Selected Works
4. Education and Experience
5. Contact

Use semantic section IDs and meaningful link labels. Support keyboard navigation, visible focus states, and appropriate reduced-motion behavior.

Multi-page routing can be introduced later if project case studies require independent pages.

## 9. Project Presentation

- Use asymmetric editorial compositions.
- Prioritize real, verifiable projects.
- Include problem, role, implementation, technology, and actual outcomes where available.
- Do not invent project details, metrics, credentials, or testimonials.
- Every project action must lead to a real destination or clearly identified unavailable state.

## 10. Accessibility and Performance

- Use semantic HTML.
- Maintain visible keyboard focus.
- Meet WCAG AA contrast requirements.
- Provide appropriate image alternatives.
- Ensure functional keyboard and touch navigation.
- Optimize images and avoid unnecessary dependencies.
- Respect prefers-reduced-motion.
- Avoid animations that block access to content.

## 11. Anti-Patterns

- No generic blue-purple gradients without a justified brand purpose.
- No excessive glassmorphism.
- No fake statistics or testimonials.
- No non-functional buttons.
- No generic template layouts.
- No unnecessary animation or decoration.
- No fabricated project content.
- No em dashes in generated copy.
- No unnecessary packages, frameworks, or dependencies.

## 12. Quality Gate

Before implementation approval:
- Approve desktop and mobile hero compositions.
- Confirm the final headline and supporting identity.
- Confirm the portrait asset and treatment.
- Confirm wordmark and graffiti direction.
- Validate typography choices and licensing.
- Review the single-page navigation.
- Verify contrast, keyboard access, responsive behavior, and reduced motion.
- Ensure every major design decision has a written rationale.

