import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  // turbopack: {
  //   resolveAlias: {
  //     // Path to your `mdx-components` file with extension
  //     "next-mdx-import-source-file": "./mdx-components.tsx",
  //   },
  // },
  async redirects() {
    return [
      // Renamed: features/* → gettingStarted/*
      {
        source: "/features/SetUp",
        destination: "/gettingStarted",
        permanent: true,
      },
      {
        source: "/features/setUp",
        destination: "/gettingStarted",
        permanent: true,
      },
      {
        source: "/SetUp",
        destination: "/gettingStarted",
        permanent: true,
      },
      {
        source: "/features/browserSupport",
        destination: "/gettingStarted/browserSupport",
        permanent: true,
      },
      // Renamed: features/* → features/sidebarAccess/*
      {
        source: "/features/floatingButton",
        destination: "/features/sidebarAccess/floatingButton",
        permanent: true,
      },
      {
        source: "/features/mouseTriggers",
        destination: "/features/sidebarAccess/mouseTriggers",
        permanent: true,
      },
      // Renamed: features/* → howTo/*
      {
        source: "/features/browserSelection",
        destination: "/howTo/browserSelection",
        permanent: true,
      },
      // Moved to features/
      {
        source: "/shortcuts",
        destination: "/features/shortcuts",
        permanent: true,
      },
      // Case sensitivity fix
      {
        source: "/features/Index",
        destination: "/features",
        permanent: true,
      },
      // Typo fixes
      {
        source: "/features/lifeTabs",
        destination: "/features/liveTabs",
        permanent: true,
      },
      {
        source: "/features/floatinButton",
        destination: "/features/sidebarAccess/floatingButton",
        permanent: true,
      },
      {
        source: "/features/smartFloders",
        destination: "/features/smartFolders",
        permanent: true,
      },
    ];
  },
});
