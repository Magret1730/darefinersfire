import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Providers from "@/app/providers/providers";
import { PostHogProvider } from "@/app/providers/PosthogProvider";
import HeaderComponent from "@/app/components/Header.component";
import FooterComponent from "@/app/components/Footer.component";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Da Refiner's Fire | Inspirational Skits",
  description:
    "Discover Da Refiner's Fire - thought-provoking dramas and skits that inspire reflection, ignite purpose, and transform lives. Watch our latest productions and stories online.",
  keywords: [
    "inspirational videos",
    "motivational short films",
    "purpose-driven dramas",
    "Da Refiner's Fire",
    "uplifting skits",
    "transformational stories",
    "hope and inspiration",
  ],
  icons: {
    icon: "/logo1.svg",
  },
  openGraph: {
    title: "Da Refiner's Fire | Inspirational Skits",
    description:
      "Uplifting dramas and skits from Da Refiner's Fire — stories that challenge, inspire, and awaken purpose.",
    url: "https://darefinersfire.netlify.app/",
    siteName: "Da Refiner's Fire",
    images: [
      {
        url: "https://darefinersfire.netlify.app/logo1.svg",
        width: 1200,
        height: 630,
        alt: "Da Refiner's Fire",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Refiner's Fire | Inspirational Skits",
    description:
      "Watch skits from Da Refiner's Fire — inspiring stories that ignite hope and transform lives.",
    images: ["https://darefinersfire.netlify.app/logo1.svg"],
    creator: "@darefinersfire",
    site: "@darefinersfire",
  },
  other: {
    facebookPage: "https://www.facebook.com/share/1C3oxNkxyC/?mibextid=wwXIfr",
    facebook: "https://www.facebook.com/darefinersfire/",
    tiktok: "https://www.tiktok.com/@darefinersfire",
    youtube: "https://www.youtube.com/@darefinersfire",
    instagram: "https://www.instagram.com/darefinersfire1/",
    x: "https://x.com/darefinersfire",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <PostHogProvider>
          <Providers>
            <ToastContainer position="top-right" />
            <HeaderComponent />
            {children}
            <FooterComponent/>
          </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}
