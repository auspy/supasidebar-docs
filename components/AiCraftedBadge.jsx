import Link from "next/link";

// Keep in sync with: content/aboutDocs.mdx (this label/link points to that page)
const AI_CRAFTED_LABEL = "Crafted by AI";
const ABOUT_DOCS_PATH = "/aboutDocs";

export function AiCraftedBadge() {
  return (
    <Link
      href={ABOUT_DOCS_PATH}
      className="ai-crafted-badge"
      aria-label={AI_CRAFTED_LABEL}
      title={AI_CRAFTED_LABEL}
    >
      <svg
        className="ai-crafted-badge__icon"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2c.42 3.86 1.28 6.4 2.6 7.7 1.3 1.32 3.84 2.18 7.7 2.6-3.86.42-6.4 1.28-7.7 2.6-1.32 1.3-2.18 3.84-2.6 7.7-.42-3.86-1.28-6.4-2.6-7.7-1.3-1.32-3.84-2.18-7.7-2.6 3.86-.42 6.4-1.28 7.7-2.6C10.72 8.4 11.58 5.86 12 2Z" />
      </svg>
      <span className="ai-crafted-badge__label">{AI_CRAFTED_LABEL}</span>
    </Link>
  );
}
