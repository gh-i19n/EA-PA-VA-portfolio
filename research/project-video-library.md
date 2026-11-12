# Project video library

## Public copies

The November 2026 video folder contains 48 files (36 unique videos), including duplicate copies and the existing personal introduction. The project pages use 23 distinct recordings: 21 prepared public copies and the existing silent Trello and Excel clips. The later meeting-report recording replaces the earlier recording of the same document.

The index keeps the four service categories. Executive support, operations and documentation each open a recording library with one active video player. Travel keeps the supplied itinerary because no travel recording was present in this upload.

Category titles and capability names come from `src/config/service-categories.ts`, shared with Services. Every recording has a typed category and capability assignment. Executive Support includes calendar/bookings, inbox/email templates, filing and the Excel data sample (10 recordings). Operations includes task boards, handoffs and a live-production sample labelled “Project management” as requested (4). Documentation includes reports, agendas, presentations, communication documents and research (9).

The desktop playlist stretches to the height of the player, title and description. Its contents scroll within that space. On smaller screens it remains a horizontal list beneath the player.

## Media preparation

- Original uploads in `output/video/` are unchanged.
- New public videos use H.264, 24 fps, YUV 4:2:0 and MP4 fast start. Resolution stays at or below the original size and 1440 × 900. Screen recordings have no audio track; the theatre production retains AAC audio and starts muted.
- Calendar clips exclude the sidebar with account calendars. The Gmail excerpt shows only filter controls. The Outlook excerpt focuses on the scheduling dialog. Airtable client/contact columns are cropped out and budget values are covered.
- The existing Excel clip shows aggregate reporting, excluding individual student records.
- The cohort-onboarding clip was removed from the public library at the user's request. Its original upload is retained.
- The theatre clip is assigned to Project & Operations Management and labelled “Project management” following the user’s instruction. The user confirmed that she directed this production; the recording description and explanation use that role.
- ARCON annual and weekly income reports remain private pending permission to publish. Raw inbox listings, identifiable student records and membership/giving sheets are also excluded from public copies.
- Short or repeated recordings are represented by the clearer recording of the same work. Some document and booking clips are excerpts.

## Selected files

| Public video | Uploaded source | Excerpt |
| --- | --- | --- |
| `/videos/projects/calendar-planning.mp4` | `output/video/Calendar Scheduling/Calendar.mp4` | 0s to 12.5s |
| `/videos/projects/calendar-overview.mp4` | `output/video/Calendar Scheduling/Screen Recording 2026-10-31 144842.mp4` | 0s to 3.75s |
| `/videos/projects/weekly-scheduling.mp4` | `output/video/Calendar Scheduling/Screen Recording 2026-10-31 150555.mp4` | 0s to 3.75s |
| `/videos/projects/calendly-booking.mp4` | `output/video/Calendar Scheduling/Calendly.mp4` | 19s to 31s |
| `/videos/projects/selar-booking.mp4` | `output/video/Calendar Scheduling/Seelar bookings.mp4` | 0s to 18.917s |
| `/videos/projects/digital-filing.mp4` | `output/video/Digital Filling.mp4` | 0s to 46.667s |
| `/videos/projects/inbox-filters.mp4` | `output/video/Email management video/Screen Recording 2026-10-31 140537.mp4` | 25s to 60s |
| `/videos/projects/scheduled-email.mp4` | `output/video/Email management video/Screen Recording 2026-10-31 141546.mp4` | 2s to 5s |
| `/videos/projects/airtable-tracking.mp4` | `output/video/Airtablr.mp4` | 8s to 35s |
| `/videos/projects/action-deliverables.mp4` | `output/video/Whatapp deliverables.mp4` | 0s to 6s |
| `/videos/projects/communication-templates.mp4` | `output/video/Communication template.mp4` | 0s to 27.125s |
| `/videos/projects/email-templates.mp4` | `output/video/Email Templates.mp4` | 0s to 9s |
| `/videos/projects/figma-designs.mp4` | `output/video/Figma.mp4` | 0s to 4.042s |
| `/videos/projects/research-questionnaire.mp4` | `output/video/Google form.mp4` | 0s to 5s |
| `/videos/projects/meeting-agenda.mp4` | `output/video/Meeting Agenda.mp4` | 0s to 7.083s |
| `/videos/projects/meeting-report-review.mp4` | `output/video/Meeting Report.mp4` | 38s to 86s |
| `/videos/projects/research-article.mp4` | `output/video/Screen Recording 2026-11-02 105747.mp4` | 0s to 8.042s |
| `/videos/projects/research-writing.mp4` | `output/video/Screen Recording 2026-11-02 110006.mp4` | 0s to 5.458s |
| `/videos/projects/survey-summary.mp4` | `output/video/Screen Recording 2026-11-02 115154.mp4` | 4s to 13s |
| `/videos/projects/presentation-design.mp4` | `output/video/slides presentation.mp4` | 0s to 21.75s |
| `/videos/projects/project-management-production.mp4` | `output/video/Screen Recording 2026-11-05 155801.mp4` | Full recording |

Trello uses `/videos/trello-workflow.mp4`; Excel uses `/videos/excel-reporting.mp4`. Both were already prepared as silent public samples.

## Playback

Visible recordings start automatically, muted and inline. Moving off-screen or hiding the tab pauses playback. A visitor’s manual pause is preserved when returning. Reduced-motion preferences stop automatic playback until the visitor explicitly chooses Play. Browsers that block autoplay retain a manual play control.

The theatre recording retains its production audio; native player controls let the visitor turn on sound.

Each detail page loads only its selected recording. Choosing another recording stops the previous player and starts the selected clip when it is visible. Native controls support seeking, pausing and fullscreen playback.

## Explanations

Each recording has its own Problem, Solution and Approach in `project-stories.ts`. The same selected recording supplies the player and these explanations, so playlist changes update them together. Choosing a different recording reopens Problem; selecting the same recording again preserves the open explanation.

The illustrated accordion uses the recording's existing public still on the right of its text, with the image below the text on smaller screens. The copy describes the supplied work and its intended purpose without claiming measured results. The travel document has the same three-part explanation and retains its PDF link.

The old brief, approach, handoff, outcome and next-work-sample sections are removed from the detail-page layout. The site footer remains shared across pages.
