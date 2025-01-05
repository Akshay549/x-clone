import "./globals.css";

const metadata = {
  title: "X | Twitter Clone",
  description: "Next.js 15 and React 19 X/Twitter social media app with responsive design using Tailwind CSS.",
  keywords: "Twitter Clone, X Clone, Next.js, Tailwind CSS, Social Media App, Responsive Design",
  author: "Askhay Akhade",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="icon" href="/logo.png" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
