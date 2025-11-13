import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "SupaSidebar Documentation",
  description: "Complete guide to using SupaSidebar - enhance your macOS Finder with powerful sidebar features.",
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
