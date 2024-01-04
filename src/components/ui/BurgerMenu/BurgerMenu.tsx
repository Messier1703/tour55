"use client"
import { useEffect } from "react"
import styles from "./BurgerMenu.module.scss"
import Link from "next/link"
import { Button, ConfigProvider } from "antd"
import { baseTheme } from "@/theme/themeConfig"

interface BurgerMenuProps {
  isOpen: boolean
  onClose: () => void
  id: string
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose, id }) => {
  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add("burger_menu_open")
    } else {
      body.classList.remove("burger_menu_open")
    }

    return () => {
      body.classList.remove("burger_menu_open")
    }
  }, [isOpen])

  return (
    <nav className={`${styles.burger_menu} ${isOpen ? styles.burger_menu_open : ""}`} id={id}>
      <div className={styles.burger_menu_wrapper}>
        <Link href="/#about" className={styles.burger_menu_link} onClick={onClose}>
          О студии
        </Link>
        <Link href="/#portfolio" className={styles.burger_menu_link} onClick={onClose}>
          Наши работы
        </Link>
        <Link href="/#services" className={styles.burger_menu_link} onClick={onClose}>
          Услуги
        </Link>
        <Link href="/#reviews" className={styles.burger_menu_link} onClick={onClose}>
          Отзывы
        </Link>
        <Link href="/blog" className={styles.burger_menu_link} onClick={onClose}>
          Блог о съемке
        </Link>
        <Link href="#contacts" className={styles.burger_menu_link} onClick={onClose}>
          Контакты
        </Link>
        <Link href="/calendar#calendar" className={styles.burger_menu_link} onClick={onClose}>
          Календарь съемок
        </Link>
        <ConfigProvider theme={baseTheme}>
          <Button size="large" type="primary" onClick={onClose}>
            Закрыть
          </Button>
        </ConfigProvider>
      </div>
    </nav>
  )
}

export default BurgerMenu
