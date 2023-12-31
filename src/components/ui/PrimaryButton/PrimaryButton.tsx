import { Button, ConfigProvider } from "antd"
import { ReactNode } from "react"
import { baseTheme } from "@/theme/themeConfig"
import styles from "./PrimaryButton.module.scss"

interface PrimaryButtonProps {
  children: string | ReactNode
  type?: "default" | "primary" | "dashed" | "link" | "text"
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, type }) => {
  return (
    <ConfigProvider theme={baseTheme}>
      <Button type={type} className={styles.button}>
        {children}
      </Button>
    </ConfigProvider>
  )
}

export default PrimaryButton
