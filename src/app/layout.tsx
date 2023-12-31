import type { Metadata } from "next"
import { Jost } from "next/font/google"

import "@/styles/variables.scss"
import "@/styles/globals.scss"
import Header from "@/layout/Header/Header"

const jost = Jost({ subsets: ["latin"], variable: "--var-jost" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
