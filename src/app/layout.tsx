import "../styles/css/all.min.css";
import "../styles/css/animate.css";
import "../styles/css/bootstrap.css";
import "../styles/css/meanmenu.css";
import "../styles/css/nice-select.css";

import "swiper/css";
import "swiper/css/bundle";

import "react-modal-video/css/modal-video.css";

import "../styles/style.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
