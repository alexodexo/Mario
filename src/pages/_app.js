// src/pages/_app.js
import Head from "next/head";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/components/AuthProvider";
import dynamic from "next/dynamic";



import Layout from "@/components/Layout";
import { Poppins, Baloo_2 } from "next/font/google";
import { PermissionsProvider } from "@/components/PermissionsProvider";

// SafariWarning dynamisch importieren, damit es nur clientseitig geladen wird
const SafariWarning = dynamic(() => import("@/components/SafariWarning"), {
  ssr: false, // Deaktivieren des Server‑Side Renderings
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo2",
});

export default function App({ Component, pageProps }) {
  // Layout-Handling pro Page
  const getLayout = Component.noLayout
    ? (page) => page
    : (page) => <Layout>{page}</Layout>;

  return (
    <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
      

      <main className={`${poppins.variable} ${baloo2.variable}`}>
        <SafariWarning />

        <AuthProvider>
          <PermissionsProvider>
            {getLayout(<Component {...pageProps} />)}
       
          </PermissionsProvider>
        </AuthProvider>
      </main>
    </ThemeProvider>
  );
}

