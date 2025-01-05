import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
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

      {/* body get start here */}
      <body suppressHydrationWarning={true}>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8 ">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-100 ">{children}</div>
          <div className="hidden lg:flex ml-4 md:ml-8 ">
            <RightBar />
          </div>
        </div>
      </body>
      {/* body get end here */}
    </html>
  );
}
