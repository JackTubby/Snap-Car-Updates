import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Attribute class tells Tailwind to use the dark theme class
    <ThemeProvider attribute="class"> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
