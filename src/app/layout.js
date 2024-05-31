import React from "react";
import PropTypes from "prop-types";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classess from "./page.module.css";

import Head from "next/head";
import SocialMedia from "@/modules/home/socialMedia";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <body className={montserrat.className}>
        <SocialMedia />
        <Navbar />
        <main className={classess.main}>{children}</main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RootLayout;
