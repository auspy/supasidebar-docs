import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import { FeatureCard, FeatureCards } from "./components/FeatureCard";
import { YouTubeVideo } from "./components/YouTubeVideo";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    FeatureCard,
    FeatureCards,
    YouTubeVideo,
    ...components,
  };
}
