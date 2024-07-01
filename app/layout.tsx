import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontcp } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ReactQuery from "@/utils/reactQuery";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReactQuery>
        <html suppressHydrationWarning lang="en">
          <head />
          <body
            className={clsx(
              "min-h-dvh box-border w-full antialiased",
              fontcp.className
            )}
          >
            <NextTopLoader />
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <div className="relative flex flex-col w-full min-h-dvh">
                <Navbar />
                <main className="mx-auto w-full max-w-[1920px] flex items-center flex-col  h-full pt-6  sm:px-6 max-sm:px-2 flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </Providers>
          </body>
        </html>
      </ReactQuery>
    </ClerkProvider>
  );
}
