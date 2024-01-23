import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOLLERTIA",
  description: "Get back your rights and be free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-FC04VSG9S8"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FC04VSG9S8');
      </script> */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FC04VSG9S8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FC04VSG9S8');
        `}
      </Script>
      <body className={`${inter.className} bg-darkGray text-slate-200`}>
        {/* <div>hellu</div> */}
        {children}
      </body>
    </html>
  );
}
