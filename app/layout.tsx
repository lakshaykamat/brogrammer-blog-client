"use client";
import "./globals.css";
import SEO from "./data/seo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          {/* Language Meta Tag (specify the language of your content): */}
          <meta name="language" content="en-US" />
          <title>{SEO.title}</title>
          <meta name="description" content={SEO.description} />

          {/* Keywords Meta Tag */}
          <meta name="keywords" content={SEO.keywords} />

          {/* Author Meta Tag (if you're the primary author): */}
          <meta name="author" content={SEO.author} />

          {/* Robots Meta Tag (control how search engines crawl your site): */}
          <meta name="robots" content="index, follow" />

          {/* Open Graph Meta Tags (improve social media sharing): */}
          <meta property="og:title" content={SEO.OpenGraph.title} />
          <meta property="og:description" content={SEO.OpenGraph.description} />
          <meta property="og:image" content={SEO.OpenGraph.image} />
          <meta property="og:url" content={SEO.OpenGraph.URL} />
          <meta property="og:type" content={SEO.OpenGraph.type} />

          {/* Twitter Card Meta Tags (optimize for Twitter sharing) */}
          <meta name="twitter:card" content={SEO.Twitter.card} />
          <meta name="twitter:site" content={SEO.Twitter.site} />
          <meta name="twitter:title" content={SEO.Twitter.title} />
          <meta name="twitter:description" content={SEO.Twitter.description} />
          <meta name="twitter:image" content={SEO.Twitter.image} />

          {/* Canonical Tag (prevent duplicate content issues): */}
          <link rel="canonical" href={SEO.CanonicalTags} />
        </head>
        <body className={`bg-sky-100 dark:text-slate-200 dark:bg-sky-950 `}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
