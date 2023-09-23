import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamza Mostafa SWE',
  description: 'Resume and a simple blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header/>
          {children}
        </div>
      </div>
      <Sidebar/>
    </div>
    </body>
    </html>
  )
}
