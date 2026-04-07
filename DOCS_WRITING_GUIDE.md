# SupaSidebar Documentation Writing Guide

> **Audience:** AI agents and human contributors writing SupaSidebar docs.
> **Companion:** See `docs/BRAND_GUIDELINES.md` for visual identity, colors, and full voice profile.

---

## 1. Purpose and audience

SupaSidebar docs are read by **macOS power users** - people comfortable with System Settings, keyboard shortcuts, and browser workflows, but not necessarily developers. Write for someone who wants to get things done, not learn theory.

Every page answers one question: **"How does this feature work and how do I use it?"**

---

## 2. Voice and tone

### Core principles

- **Direct and practical.** No filler, no preamble. Open with what the feature does, then explain how.
- **Second person for instructions.** "You can configure..." not "Users can configure..."
- **Present tense.** "SupaSidebar syncs your data" not "SupaSidebar will sync your data."
- **Features described by what they do, not what they are.** "Real-time mirror of your browser tabs directly in the sidebar" - not "A tab management system."
- **Short paragraphs.** 2-4 sentences max. If a paragraph is longer, break it up.

### Pronoun rules

| Context | Rule | Example |
|---------|------|---------|
| Instructions | "you" | "You can drag items between folders." |
| Product references | "SupaSidebar" (third person) | "SupaSidebar syncs via iCloud." |
| UI copy references | No pronoun | "Check Automation permissions in System Settings." |

### Never

- Never say **"we"** - SupaSidebar is a solo project.
- Never say **"I"** in docs - save that for blog/social.
- Never use **em-dashes** (—). Use commas, hyphens, or periods instead.
- Never use **all-caps headings**. Sentence case everywhere.
- Never use **"Thank you for reaching out"**, **"we apologize"**, or corporate support language.
- Never use **"It's important to note that"**, **"It should be noted"**, or similar filler phrases. Just state the fact.
- Never use **"simply"**, **"just"**, or **"easy"** - what's easy for you may not be for the reader.

---

## 3. Page structure templates

### Feature page

The structure should flow: **concept → setup → usage → reference**. Use topic-specific H2 names that match what a user would search for, not generic labels.

```
# Feature Name

One-line description of what the feature does and why it matters.

![Screenshot alt text](/assets/feature-name-overview.webp)

## How it works

Explain the mental model. Use analogies if helpful ("like mail rules for your
bookmarks"). Cover the core concept before any instructions.

## Setup

Prerequisites, permissions, or configuration needed before using the feature.

## [Topic-specific sections]

Use H2 names that describe the actual content. Examples from existing pages:
- "Creating a rule" (airTrafficControl)
- "Tiling modes" (tiling)
- "Linking a profile" (profileSpaces)

Avoid generic names like "Usage" or "Settings" - be specific:
"Appearance settings" or "Managing rules" tells the reader what to expect.

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd Shift Space` | Open sidebar |

See [all keyboard shortcuts](/features/shortcuts) for the complete list.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Feature doesn't appear | Check that X is enabled in **Preferences → Y** |

## Tips

Practical advice, edge cases, or best practices. Include inline cross-links
to related features where relevant:

- Use [Spaces](/features/spaces) to organize items by context
- Combine with [Air Traffic Control](/features/airTrafficControl) for automatic routing
```

> **Note on "Learn more" vs "Tips":** Either pattern works. A `## Tips` section with inline cross-links is often more natural than a bare link list. The key requirement is that every page has 2-3 internal links to related content, whether in a dedicated section or woven into Tips.

### How-To page

```
# How to [do something]

One-line description of what this guide covers.

## Steps

1. Open **Preferences → Section → Setting**.
2. Do the next thing.
3. Verify the result.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Step 2 fails | Try alternative approach |

## Learn more

- [Related Feature](/features/feature)
```

### Troubleshooting page

```
# [Problem description]

## Problem

What the user sees or experiences.

## Cause

Why this happens (briefly).

## Solution

1. First step to fix.
2. Second step.
3. Verify the fix.

## Learn more

- [Related docs page](/path)
```

### Overview / index page

```
# Section Name

Brief intro sentence about this section.

<FeatureCards>
  <FeatureCard title="Feature" href="/features/feature">
    One-line description
  </FeatureCard>
</FeatureCards>
```

---

## 4. Formatting rules

### Headings

- **H1** (`#`): One per page. The page title. Matches the topic and includes the feature name.
- **H2** (`##`): Major sections. Use descriptive names - "Sidebar settings" is better than just "Settings."
- **H3** (`###`): Subsections within an H2.
- **Never skip heading levels.** No jumping from H2 to H4. This breaks accessibility and SEO.

### Keyboard shortcuts

Always use backtick inline code with spelled-out modifier names:

| Correct | Incorrect |
|---------|-----------|
| `` `Cmd Shift Space` `` | `⌘⇧Space` |
| `` `Cmd Ctrl K` `` | `**⌘⌃K**` |
| `` `Opt Click` `` | `⌥ Click` |

Modifier order: `Cmd` → `Ctrl` → `Opt` → `Shift` → key.

### UI paths and setting names

Use bold with arrow separators:

- **Preferences → Sidebar → Appearance**
- **System Settings → Privacy & Security → Automation**

### Bullet lists

Use `**Bold term** - description` format (hyphen, not em-dash):

```markdown
- **Smart Save** - Saves the current page to your sidebar with one shortcut
- **Auto-organize** - Routes saved pages to folders based on your rules
```

### Tables

Use for: keyboard shortcuts, settings descriptions, browser support matrices, troubleshooting (Issue | Solution), feature comparisons.

```markdown
| Setting | Description |
|---------|-------------|
| **Position** | Which side of the screen the sidebar appears on |
| **Width** | Default sidebar width in pixels |
```

### Callouts

Use Nextra's `<Callout>` component sparingly:

```mdx
<Callout type="info">
This feature requires SupaSidebar Premium.
</Callout>

<Callout type="warning">
This action closes all tabs in the current space. Save your work first.
</Callout>
```

- `type="info"` - Premium features, important context, non-obvious behavior
- `type="warning"` - Destructive actions, data loss risks, permission requirements
- Do not overuse. If every section has a callout, none of them stand out.

**Markdown blockquotes** (`>`) are acceptable for inline notes that don't need the visual weight of a `<Callout>`. Use them for brief contextual asides:

```markdown
> ATC rules override your saved browser preference. Only modifier-click
> actions take priority over ATC routing.
```

Use `<Callout>` when the information requires attention (premium gates, data loss warnings). Use blockquotes for supplementary context that enhances but isn't critical.

### Links

- Use absolute paths from the content root: `[Live Tabs](/features/liveTabs)`
- Use descriptive anchor text: "See the [Live Tabs guide](/features/liveTabs)" - never "click here" or "read more"
- Every page should have at least 2-3 internal cross-links to related pages
- Always end with a "Learn more" section linking to related content

### Code blocks

Use fenced code blocks with a language tag. Shell commands use `bash`:

````markdown
```bash
open supasidebar/swiftapp/supasidebar.xcodeproj
```
````

All code must be copy-paste-ready. No unexplained placeholders.

---

## 5. Frontmatter

Every MDX page must include frontmatter with `title` and `description`:

```yaml
---
title: "Live Tabs - Real-time browser tab access"
description: "Mirror your open browser tabs in SupaSidebar for instant switching across Safari, Chrome, Firefox, Edge, and Arc."
---
```

### Rules

- **title**: Under 60 characters. Include the feature name. Pattern: `Feature Name - What it does`
- **description**: Under 160 characters. A complete sentence describing the page's content. This is used for meta descriptions and AI extraction.
- Every page must have a unique title and description. No duplicates across the site.
- Update the description when page content changes significantly.

---

## 6. SEO and discoverability

### On-page SEO

- **H1 matches the page topic** and includes the feature name naturally
- **H2s are descriptive and keyword-rich** - "Sidebar keyboard shortcuts" not just "Shortcuts"
- **First paragraph** contains the most important information about the topic
- **Internal links** use descriptive anchor text with the target page's topic
- **URL structure**: Keep slugs short, descriptive, and in camelCase to match existing conventions (e.g., `/features/liveTabs`, `/features/smartFolders`)

### Sitemap and metadata

- All published pages should be registered in the appropriate `_meta.js` file
- Stub pages (incomplete content) should use `display: 'hidden'` in `_meta.js` until ready
- The site uses Pagefind for search indexing - clear headings and structured content improve search results

### Structured data

Consider adding JSON-LD structured data for:
- `TechArticle` on reference/feature pages
- `HowTo` on step-by-step guides
- `FAQPage` on troubleshooting pages
- `BreadcrumbList` for navigation hierarchy

These improve both traditional search and AI citation rates.

---

## 7. AI and LLM optimization

Modern AI assistants (ChatGPT, Claude, Perplexity) increasingly surface documentation in their responses. Optimizing for AI discoverability means more users find SupaSidebar through AI-generated answers.

### Writing for AI extraction

- **Lead with the answer.** State what the feature does in the first sentence. Don't bury the key fact below a paragraph of context.
- **Define terms precisely.** If SupaSidebar has a concept (Spaces, Air Traffic Control, Smart Save), define it clearly on first use. Use the same term consistently - don't alternate between synonyms.
- **Use explicit structure.** Clear H2/H3 headings that map to questions users would ask: "How to set up Spaces", "What are Smart Folders", "Keyboard shortcuts for the command panel."
- **Comprehensive coverage wins.** A thorough page covering the feature, its settings, usage, edge cases, and troubleshooting will be cited more than a thin overview. Cover the topic completely.
- **FAQ-style patterns for troubleshooting.** Question-answer format maps directly to how AI extracts information:

```markdown
## Why doesn't the sidebar appear over my browser?

SupaSidebar needs Accessibility permissions to position itself over other windows.
Go to **System Settings → Privacy & Security → Accessibility** and enable SupaSidebar.
```

### Entity consistency

Use these exact names consistently throughout all docs:

| Correct | Incorrect |
|---------|-----------|
| SupaSidebar | Supa Sidebar, supasidebar, the sidebar app |
| Spaces | workspaces, space groups |
| Air Traffic Control | ATC, auto-routing, air traffic |
| Command Panel | command palette, command bar, search panel |
| Smart Save | quick save, auto-save |
| Live Tabs | live tab view, tab mirror |

### llms.txt

Consider creating a `llms.txt` file at the docs site root. This emerging standard (analogous to `robots.txt`) gives AI crawlers a structured map of the most important documentation pages. Format:

```markdown
# SupaSidebar

> A macOS sidebar app that works with any browser - Safari, Chrome, Firefox, Edge, Arc.

## Getting started
- [Installation and setup](/gettingStarted): How to install and configure SupaSidebar
- [Permissions](/gettingStarted/permissions): Required macOS permissions

## Features
- [Sidebar](/features/sidebar): The main sidebar interface
- [Spaces](/features/spaces): Workspace organization
- [Live Tabs](/features/liveTabs): Real-time browser tab access
...
```

---

## 8. Images and media

### How to add an image

1. **Check existing assets first.** Browse `public/assets/` before creating new screenshots - the image you need may already exist (see inventory below).
2. **Capture the screenshot.** Use macOS screenshot (`Cmd Shift 4` for selection, `Cmd Shift 5` for window). Show the sidebar in context next to a real browser window when possible.
3. **Prepare the file:**
   - Convert to WebP if possible (use `cwebp input.png -o output.webp` or any converter)
   - Name it `kebab-case.webp` - descriptive, no spaces, no version numbers
   - Place it in `public/assets/` (use `public/assets/browser-integration/` for browser integration screenshots)
4. **Reference in MDX:**
   ```markdown
   ![Sidebar showing Live Tabs panel](/assets/live-tabs-panel.webp)
   ```
5. **Always include descriptive alt text.** Describe what the screenshot shows, not just "screenshot."

### Image rules

- **Location**: `public/assets/` (subdirectories OK for grouping)
- **Naming**: `kebab-case.webp` - no spaces, no `(1)` suffixes, no camelCase
- **Format**: WebP preferred. JPEG acceptable. PNG only when pixel-perfect clarity is needed.
- **Light mode by default** unless specifically documenting dark mode
- **Real content** in screenshots (actual tab titles, real URLs) - not "Example Tab 1"
- **Annotations**: Use indigo (#4338CA) for callout arrows/circles when highlighting UI elements

| Correct | Incorrect |
|---------|-----------|
| `![Sidebar showing Live Tabs panel](/assets/live-tabs-panel.webp)` | `![screenshot](/assets/Live Tabs (1).jpeg)` |
| `sidebar-settings-appearance.webp` | `sidebar settings.jpeg` |
| `command-panel-search.webp` | `commandPanel.JPEG` |

### How to add a video

1. **Upload to YouTube** on the SupaSidebar channel.
2. **Embed using an iframe** with a descriptive `title`:

```html
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="How to set up mouse triggers in SupaSidebar"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

3. **Place the video near the top of the page** - after the one-line description, before prose sections. Videos work best as the first visual element.

### Existing video inventory

These videos are already embedded in the docs. Reuse them when cross-linking or referencing these features:

| Video | YouTube ID | Used in |
|-------|-----------|---------|
| Command Panel demo | `IbM3sNOfUb8` | `features/commandPanel.mdx` |
| Live Tabs demo | `ia_F8vYHoUs` | `features/liveTabs.mdx` |
| Floating Button demo | `DgkGX2eQzq4` | `features/sidebarAccess/floatingButton.mdx` |
| Mouse Triggers demo | `8m36Q7ZFrVQ` | `features/sidebarAccess/mouseTriggers.mdx` |

### Existing image inventory

Key images already in `public/assets/`. Check here before creating new screenshots:

| Image | Filename | Used in |
|-------|----------|---------|
| **Sidebar & Layout** | | |
| Default sidebar position | `default position of sidebar.jpeg` | `features/sidebar.mdx` |
| Sidebar settings | `default sidebar position.jpeg` | `features/sidebar.mdx` |
| **Features** | | |
| Saved Spaces view | `saved spaces.jpeg` | `features/spaces.mdx` |
| Spaces with folders | `space and folders.jpeg` | `features/spaces.mdx` |
| Pinned Links panel | `Pinned Links.jpeg` | `features/pinnedItems.mdx` |
| Recent Items view | `recent itmes.jpeg` | `features/recentItems.mdx` |
| Live Tabs option | `Live Tabs Option.jpeg` | `features/liveTabs.mdx` |
| Live Tabs multi-browser | `lifetabsmultiplebrowser.jpeg` | `features/liveTabs.mdx` |
| Global Shortcuts settings | `Global Shortcuts.jpeg` | `features/shortcuts.mdx` |
| Customizable shortcuts | `customisable shortcut.jpeg` | (available, unused) |
| **Command Panel** | | |
| Command Panel basic | `comman panel basic.jpeg` | (available, unused) |
| Command Panel settings | `command panel settings.jpeg` | `features/commandPanel.mdx` |
| Command Panel tabs | `command panel tab.jpeg` | (available, unused) |
| Fuzzy search | `fuzzy search.jpeg` | `features/commandPanel.mdx` |
| Fuzzy match | `fuzzy match.jpeg` | `features/commandPanel.mdx` |
| **Sidebar Access** | | |
| Floating Button toggle | `Floating Button Toggle.jpeg` | `features/sidebarAccess/floatingButton.mdx` |
| Floating Button | `floating button.jpeg` | `features/sidebarAccess/floatingButton.mdx` |
| Mouse trigger settings | `mouse trigger settings panel.jpeg` | `features/sidebarAccess/mouseTriggers.mdx` |
| Mouse triggers overview | `mouse triggers.jpeg` | `features/sidebarAccess/mouseTriggers.mdx` |
| **Smart Features** | | |
| Smart Save | `smart save.jpeg` | `howTo/smart.mdx` |
| Smart Copy | `smart copy.jpeg` | (available, unused) |
| **Permissions** | | |
| Automation permission | `automation real.jpeg` | `gettingStarted/permissions.mdx` |
| Accessibility permission | `accessibility mouse triggers.jpeg` | `gettingStarted/permissions.mdx` |
| **Browser icons** | | |
| Safari | `safari.webp` | (available) |
| Chrome | `chrome.webp` | (available) |
| Brave | `brave.png` | (available) |
| Edge | `edge.jpeg` | (available) |
| Firefox | `firefox.png` | (available) |
| **Other** | | |
| Browser selection | `default browser selection.jpeg` | (available) |
| Search engine preference | `search engine preference.jpeg` | (available) |
| Folder drag-and-drop | `Folder getting save on sidebar.jpeg` | `howTo/dragAndDrop.mdx` |
| Saved links | `saved links.jpeg` | (available, unused) |
| Download flow (part 1) | `downloadp1.jpeg` | (available, unused) |
| Download flow (part 2) | `downloadp2.jpeg` | (available, unused) |

> **Note on legacy filenames:** Many existing images use spaces and inconsistent casing (e.g., `Floating Button Toggle.jpeg`, `recent itmes.jpeg`). When referencing these in MDX, URL-encode spaces with `%20`. When adding *new* images, always use kebab-case. Renaming existing files would break current page references - do that as a separate cleanup task, not while writing new content.

### TODO comments

Never leave `{/* TODO: Add image */}` comments in published pages. Either add the image or remove the placeholder. If the page isn't ready, mark it as `display: 'hidden'` in `_meta.js`.

---

## 9. Navigation and _meta.js

- Every published page must be listed in its directory's `_meta.js` file
- Use `_meta.js` (not `_meta.json`) - the JS format is the Nextra 4 standard
- Labels should be short and scannable: "Live Tabs" not "Live Tabs - Real-time browser tab mirroring"
- Use `display: 'hidden'` for draft/stub pages - this keeps them accessible by URL but out of the sidebar nav
- Delete stale `_meta.json` files if they exist alongside `_meta.js`

---

## 10. Quality checklist

Run through this before publishing any page:

### Content
- [ ] Page answers a single, clear question
- [ ] Opens with a one-line description of what the feature does
- [ ] No filler intros or preamble
- [ ] All claims are accurate and up to date with the current app version

### Structure
- [ ] Frontmatter has `title` (under 60 chars) and `description` (under 160 chars)
- [ ] Single H1 that matches the page topic
- [ ] Heading hierarchy is correct (H1 → H2 → H3, no skipped levels)
- [ ] Follows the appropriate page template (feature, how-to, troubleshooting, overview)
- [ ] "Learn more" section with 2-3 internal cross-links

### Formatting
- [ ] Keyboard shortcuts use backtick code style with spelled-out modifiers
- [ ] UI paths use bold with arrow separators
- [ ] Bullet lists use `**Bold** - description` format
- [ ] No em-dashes anywhere
- [ ] Tables used for shortcuts, settings, troubleshooting
- [ ] Callouts used sparingly and with correct type

### Voice
- [ ] No "we" or "I" pronouns
- [ ] No corporate filler ("It should be noted", "It's important to")
- [ ] No "simply", "just", or "easy"
- [ ] Product consistently called "SupaSidebar"

### Media
- [ ] Images have descriptive alt text
- [ ] Image filenames are kebab-case, in `public/assets/`
- [ ] No `{/* TODO */}` comments in published content
- [ ] Video embeds have a descriptive `title` attribute

### Navigation
- [ ] Page registered in `_meta.js`
- [ ] Stub pages use `display: 'hidden'` in `_meta.js`

---

## 11. Reference: best-in-class examples

These existing SupaSidebar pages demonstrate the target quality level. Use them as models:

- **`features/airTrafficControl.mdx`** - Excellent mental model explanation ("like mail rules for bookmarks"), clear priority/matching rules, great examples table, tips section
- **`features/tiling.mdx`** - Thorough coverage with ASCII diagrams, step-by-step breakdown, profile-aware details, concrete usage scenarios
- **`features/profileSpaces.mdx`** - Good use of callouts for premium and warnings, clear settings documentation
- **`features/localModels.mdx`** - Clean comparison table (MLX vs Ollama), well-structured setup steps

> **Note:** These reference pages predate some rules in this guide (frontmatter, spelled-out keyboard shortcuts). Follow the guide's rules for new content - don't replicate gaps from older pages.

---

## 12. Common mistakes to avoid

| Mistake | Fix |
|---------|-----|
| Starting with "This feature..." | Start with what it does: "Mirror your browser tabs in the sidebar" |
| Using Unicode keyboard symbols (⌘⇧) | Use backtick code with spelled-out names: `` `Cmd Shift` `` |
| Mixing em-dashes and hyphens | Always use hyphens or commas |
| Linking with "click here" | Use descriptive text: "See the [Spaces guide](/features/spaces)" |
| Leaving TODO comments | Add the content or hide the page |
| Writing thin stub pages | Either write the full page or don't publish it |
| Saying "Settings" as an H2 | Be specific: "Sidebar appearance settings" |
| Inconsistent feature names | Use the exact names from the entity table in Section 7 |
| Image filenames with spaces | Use kebab-case: `live-tabs-panel.webp` |
| Skipping the opening sentence | Every page needs a one-line description immediately after H1 |
