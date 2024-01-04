import styles from "./BurgerButton.module.scss"
import { Button, ConfigProvider } from "antd"
import Image from "next/image"
import burgerIcon from "/public/svg/burger-icon.svg"
import { baseTheme } from "@/theme/themeConfig"
import { MouseEventHandler } from "react"

interface BurgerButtonProps {
  onClick: MouseEventHandler<HTMLElement>
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ onClick }) => {
  return (
    <ConfigProvider theme={baseTheme}>
      <Button className={styles.burger} type="primary" onClick={onClick}>
        <Image src={burgerIcon} alt="Бургер меню" />
      </Button>
    </ConfigProvider>
  )
}

export default BurgerButton
