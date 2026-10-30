# AY, version 2: rejected first direction

This draft was rejected during implementation. The replacement is recorded in `awwwards-reference-study.md`.

## Brief

A multipage portfolio for an experienced executive assistant. A visitor should recognise AY's role, understand the responsibility she can carry, see how she thinks and find a clear way to enquire. Native scrolling only. No Figma, Lenis, 3D or scroll interception.

## Visual direction: the executive brief

Use the objects of the work itself: the morning brief, the considered itinerary and the action handoff. The opening pairs a direct executive-assistant headline with a rectangular portrait and an illustrated briefing document. The documents contain readable, illustrative work rather than ornamental dashboard widgets.

- Porcelain `#f7f8f2`: main canvas.
- Forest `#233e35`: text and the contact section.
- Fern `#55734f`: secondary emphasis.
- Mineral `#e9ede3`: supporting surfaces.
- Celery `#dce8bc`: selected states and document annotations.
- Graphite `#626e65`: supporting text.

Type: Manrope throughout. Large, closely spaced but readable headlines; medium weight interface text; open, comfortable body text. Work documents use a smaller version of the same family. No decorative monospace or isolated italic keyword.

Layout: left-aligned content, generous outer gutters, asymmetric photography and documents. Individual page layouts follow their subject rather than repeating a row of cards.

```text
AY / Executive Assistant          About  Services  Selected work  Toolkit   Contact

Executive support.                 [portrait, rectangular crop]
A step ahead.                          [morning brief overlaps edge]
Direct role + scope
Discuss support / Explore work

What I take ownership of           Time / decisions / follow-through

Inside the work                    [user selects a sample]
Brief / travel / handoff            [readable document]

Personal introduction              Photo + working principles

Tell me what needs your attention. [contact]
```

## Message hierarchy

1. AY is an executive assistant for founders and senior leaders.
2. Her responsibilities include time, communication, decision preparation, coordination, business travel and personal logistics.
3. Show judgment through sample work: what is prioritised, escalated, prepared and followed through.
4. Explain the working relationship, including discretion, delegated authority and communication.
5. Invite an introduction with a clear review step.

Virtual assistance describes remote delivery. Personal assistance extends support into the leader's personal arrangements. Neither dilutes the senior EA position.

## Motion direction

GSAP with `@gsap/react`. A single opening choreography: masked headline lines, portrait curtain, then the brief settles into place. User-controlled work samples share a moving selection indicator and a document transition. Navigation disclosures and form state changes get short, quiet feedback. No pinning, scroll scrubbing, forced scroll, custom cursor, autoplay carousel or reveal on every paragraph.

Durations: interaction 0.22s; document transition 0.45s; headline 0.9s; opening composition under 1.5s. Ease: `power3.out` / `power4.out`. Reduced motion skips spatial animation. Content is visible in server HTML and remains usable if animation fails.

## Review before building

The V1 cream/serif/arched-portrait formula did not explain the discipline. Replace that with direct typography and documents belonging to executive support. Avoid fictional success metrics, fabricated testimonials and decorative productivity UI. The portrait remains clearly credited as a stock design placeholder. Cases are explicitly illustrative, with decisions and deliverables instead of invented client results.

## Delivery plan

1. Active: build the shared visual and motion system plus the home page.
2. Build distinct services, about, work, toolkit, trust and contact pages.
3. Inspect desktop/mobile journeys, reduced motion and keyboard use; run lint, type and production build checks.
