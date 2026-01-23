import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#3B82F6" />
        <circle cx="12" cy="12" r="6" fill="white" />
        <circle cx="12" cy="12" r="2" fill="#3B82F6" />
      </svg>
      <span style={{ fontWeight: "bold", color: "#1F2937" }}>SupaSidebar Docs</span>
    </div>
  ),
  project: {
    link: "https://github.com/auspy/supasidebar-docs",
  },
  docsRepositoryBase: "https://github.com/auspy/supasidebar-docs",
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} SupaSidebar. Built with{" "}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SupaSidebar Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SupaSidebar Documentation" />
      <meta
        property="og:description"
        content="Complete guide to using SupaSidebar - enhance your macOS Finder with powerful sidebar features."
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  search: {
    placeholder: "Search documentation...",
  },
  primaryHue: 245, // Indigo/purple color matching SupaSidebar branding (#4338ca)
  primarySaturation: 58,
};

export default config;
