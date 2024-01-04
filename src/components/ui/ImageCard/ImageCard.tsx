"use client"
import styles from "./ImageCard.module.scss"
import Image, { StaticImageData } from "next/image"
import { Card, ConfigProvider } from "antd"
import Link from "next/link"
import { baseTheme } from "@/theme/themeConfig"

interface ImageCardProps {
  src: StaticImageData
  title: string
  description: string
  number?: string
  numberLink?: string
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, description, number, numberLink }) => {
  return (
    <ConfigProvider theme={baseTheme}>
      <Card
        className={styles.card}
        cover={
          <figure>
            <Image src={src} alt={`${title} фото`} />
          </figure>
        }
      >
        <h3>{title}</h3>
        <h4>{description}</h4>
        <Link href={`tel:${numberLink}`}>{number}</Link>
      </Card>
    </ConfigProvider>
  )
}

export default ImageCard
