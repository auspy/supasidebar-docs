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
      <span style={{ fontWeight: "bold", color: "#1F2937" }}>Focusmo Docs</span>
    </div>
  ),
  project: {
    link: "https://focusmo.app",
  },
  chat: {
    link: "https://discord.gg/focusmo",
  },
  docsRepositoryBase: "https://github.com/focusmo/focusmo-docs",
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Focusmo. Built with{" "}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Focusmo Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Focusmo Documentation" />
      <meta
        property="og:description"
        content="Complete guide to using Focusmo - the ultimate focus and productivity app for macOS and iOS."
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
  primaryHue: 214, // Blue color matching Focusmo branding
  primarySaturation: 100,
};

export default config;
