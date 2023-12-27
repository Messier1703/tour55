"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.webp"
import styles from "./Header.module.scss"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const toggleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll)

    return () => {
      window.removeEventListener("scroll", toggleScroll)
    }
  }, [])

  const headerClass = scrolled ? `${styles.header} ${styles.header_scrolled}` : styles.header

  return (
    <header className={headerClass}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <Link href="/">
            <figure className={styles.header_logo}>
              <Image src={logo} alt="Логотип" />
            </figure>
          </Link>
          <nav></nav>
        </div>
      </div>
    </header>
  )
}

export default Header
