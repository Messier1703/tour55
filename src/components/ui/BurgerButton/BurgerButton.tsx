import styles from "./BurgerButton.module.scss"
import { Button, ConfigProvider } from "antd"
import Image from "next/image"
import burgerIcon from "/public/svg/burger-icon.svg"
import { baseTheme } from "@/theme/themeConfig"

const BurgerButton = () => {
  return (
    <ConfigProvider theme={baseTheme}>
      <Button className={styles.burger} type="link">
        <Image src={burgerIcon} alt="Бургер меню" />
      </Button>
    </ConfigProvider>
  )
}

export default BurgerButton
