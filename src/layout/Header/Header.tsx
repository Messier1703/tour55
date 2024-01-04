"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "/public/svg/logo.svg"
import styles from "./Header.module.scss"
import instagramLogo from "/public/svg/instagram-logo.svg"
import whatsappLogo from "/public/svg/whatsapp-logo.svg"
import telegramLogo from "/public/svg/telegram-logo.svg"
import { instagramIconTheme, telegramIconTheme, whatsappIconTheme } from "@/theme/themeConfig"
import SocialButton from "@/components/ui/SocialButton/SocialButton"
import BurgerButton from "@/components/ui/BurgerButton/BurgerButton"
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu"

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

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 840)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className={headerClass}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <Link href="/">
            <figure className={styles.header_logo}>
              <Image src={logo} alt="Логотип" />
            </figure>
          </Link>
          {!!isDesktop && (
            <div className={styles.header_links}>
              <Link href="#">Бронь</Link>
              <Link href="#">Получить подборку</Link>
              <Link href="#">Наши эксперты</Link>
              <Link href="#">Отзывы</Link>
            </div>
          )}
          <div className={styles.header_social}>
            <Link href="/">
              <SocialButton theme={instagramIconTheme} src={instagramLogo} alt="Инстаграм" />
            </Link>
            <Link href="/">
              <SocialButton theme={telegramIconTheme} src={telegramLogo} alt="Инстаграм" />
            </Link>
            <Link href="/">
              <SocialButton theme={whatsappIconTheme} src={whatsappLogo} alt="Инстаграм" />
            </Link>
          </div>
          {!isDesktop && (
            <>
              <BurgerButton onClick={toggleMenu} />
              <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu} id={styles.mobile_only} />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
