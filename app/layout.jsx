import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "SupaSidebar Documentation",
  description: "Complete guide to using SupaSidebar - enhance your macOS Finder with powerful sidebar features.",
};

const navbar = (
  <Navbar
    logo={
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#3B82F6" />
          <circle cx="12" cy="12" r="6" fill="white" />
          <circle cx="12" cy="12" r="2" fill="#3B82F6" />
        </svg>
        <span style={{ fontWeight: "bold" }}>SupaSidebar Docs</span>
      </div>
    }
    projectLink="https://github.com/auspy/supasidebar-docs"
  />
);

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout pageMap={await getPageMap()} navbar={navbar}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
