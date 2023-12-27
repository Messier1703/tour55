import React from "react"
import { ConfigProvider, Button, ThemeConfig } from "antd"
import Image, { StaticImageData } from "next/image"
import styles from "./SocialButton.module.scss"

interface SocialButtonProps {
  src: StaticImageData
  theme: ThemeConfig
  alt: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ src, theme, alt }) => {
  return (
    <ConfigProvider theme={theme}>
      <Button type="primary" className={styles.button}>
        <Image src={src} alt={alt} />
      </Button>
    </ConfigProvider>
  )
}

export default SocialButton
