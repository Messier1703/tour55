import React from "react"
import styles from "./HeroSection.module.scss"
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton"

const HeroSection = () => {
  return (
    <main className={styles.hero}>
      <figure className={styles.hero_bg}>
        <video src={require("/public/videos/hero-bg.mp4")} autoPlay muted loop />
      </figure>
      <div className="container">
        <h1>Раннее бронирование туров в Турцию из Омска</h1>
        <p>
          Получите пять вариантов туров в <span>WhatsApp,</span> ответив на несколько простых вопросов:
        </p>
        <PrimaryButton type="primary">получить подборку</PrimaryButton>
      </div>
    </main>
  )
}

export default HeroSection
