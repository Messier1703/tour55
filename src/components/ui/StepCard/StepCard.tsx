import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./StepCard.module.scss"

interface StepCardProps {
  src: StaticImageData
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ src, title, description }) => {
  return (
    <article className={styles.card}>
      <figure>
        <Image src={src} alt={`${title} фото`} />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default StepCard
