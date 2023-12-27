import Image from "next/image"
import styles from "./PriceCard.module.scss"

interface PriceCardProps {
  title: string
  src: string
}

const PriceCard: React.FC<PriceCardProps> = ({ title, src }) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <figure>
        <Image src={src} alt={`${title} Иконка`} width={70} height={70} />
      </figure>
    </article>
  )
}

export default PriceCard
