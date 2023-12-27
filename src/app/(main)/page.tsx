import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton"
import styles from "./HomePage.module.scss"
import PriceCard from "@/components/ui/PriceCard/PriceCard"

export default function HomePage() {
  return (
    <>
      <main className={styles.hero}>
        <div className="container">
          <h1>Раннее бронирование туров в Турцию из Омска</h1>
          <p>
            Получите пять вариантов туров в <span>WhatsApp,</span> ответив на несколько простых вопросов:
          </p>
          <PrimaryButton type="primary">string</PrimaryButton>
        </div>
      </main>
      <section className={styles.price}>
        <div className="container">
          <h2 className="section_title">
            Раннее бронирование <span>с выгодными условиями оплаты</span>
          </h2>
          <h3 className="subtitle">В стоимость включены</h3>
          <p className="description">Цена на 1 человека при двухместном размещении</p>
          <div className={styles.price_cards}>
            <PriceCard title="Авиаперелет" src="/plane-icon.svg" />
            <PriceCard title="Групповой трансфер" src="/plane-icon.svg" />
            <PriceCard title="Медицинская страховка" src="/plane-icon.svg" />
            <PriceCard title="Проживание в отеле" src="/plane-icon.svg" />
          </div>
        </div>
      </section>
    </>
  )
}
