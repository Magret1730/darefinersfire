import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Providers from "./providers";


export const metadata: Metadata = {
  title: "Da Refiner's Fire Media | Inspirational Christian Skits & Videos",
  description: "Explore Da Refiner's Fire Drama Ministry – uplifting Christian dramas, short films, and inspirational videos that refine hearts and transform lives. Watch our latest skits and teachings online.",
  keywords: [
    "Christian drama ministry",
    "inspirational Christian videos",
    "faith-based skits",
    "Da Refiner's Fire",
    "Christian short films",
    "spiritual growth videos"
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Da Refiner's Fire Drama Media | Inspirational Christian Skits & Videos",
    description: "Uplifting Christian dramas and inspirational videos from Da Refiner's Fire Drama Ministry. Watch short films and skits that inspire faith and transform lives.",
    url: "https://www.darefinersfire.com",
    siteName: "Da Refiner's Fire",
    images: [ {
      url: "https://www.darefinersfire.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Da Refiner's Fire Drama Ministry"
    } ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Refiner's Fire Drama Ministry | Inspirational Christian Skits & Videos",
    description: "Uplifting Christian dramas and inspirational videos from Da Refiner's Fire Drama Ministry.",
    images: ["https://www.darefinersfire.com/og-image.jpg"],
    creator: "@DaRefinersFire",
    site: "@DaRefinersFire",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
