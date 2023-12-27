import Image, { StaticImageData } from "next/image"
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton"
import styles from "./CatalogCard.module.scss"
import { ReactNode } from "react"

interface CatalogCardProps {
  src: StaticImageData
  title: string
  children: ReactNode
}

const CatalogCard: React.FC<CatalogCardProps> = ({ src, title, children }) => {
  return (
    <article className={styles.card}>
      <figure className={styles.card_image}>
        <Image src={src} alt={`${title} Фото`} />
      </figure>
      <h3>{title}</h3>
      {children}
      <PrimaryButton type="primary">Заказать</PrimaryButton>
    </article>
  )
}

export default CatalogCard
