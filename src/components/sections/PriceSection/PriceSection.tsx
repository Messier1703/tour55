import styles from "./PriceSection.module.scss"
import PriceCard from "@/components/ui/PriceCard/PriceCard"
import heroBg from "/public/images/hero-bg.webp"
import Image from "next/image"
import CatalogCard from "@/components/ui/CatalogCard/CatalogCard"
import star from "/public/svg/star.svg"
import planeIcon from "/public/images/plane-icon.webp"
import medicalIcon from "/public/images/medical-icon.webp"
import hotelIcon from "/public/images/hotel-icon.webp"
import busIcon from "/public/images/bus-icon.webp"

const PriceSection = () => {
  return (
    <section className={styles.price}>
      <div className="container">
        <h2 className="section_title">
          Раннее бронирование <span>с выгодными условиями оплаты</span>
        </h2>
        <h3 className="subtitle">В стоимость включены:</h3>
        <p className="description">(Цена на 1 человека при двухместном размещении)</p>
        <div className={styles.price_wrapper}>
          <div className={styles.price_perks}>
            <PriceCard title="Авиаперелет" src={planeIcon} />
            <PriceCard title="Групповой трансфер" src={busIcon} />
            <PriceCard title="Медицинская страховка" src={medicalIcon} />
            <PriceCard title="Проживание в отеле" src={hotelIcon} />
          </div>
          <div className="card_grid">
            <CatalogCard src={heroBg} title="Кемер на 7 ночей">
              <div className={styles.price_rating}>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
              </div>
            </CatalogCard>
            <CatalogCard src={heroBg} title="Кемер на 7 ночей">
              <div className={styles.price_rating}>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
              </div>
            </CatalogCard>
            <CatalogCard src={heroBg} title="Кемер на 7 ночей">
              <div className={styles.price_rating}>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
                <div>
                  <div className={styles.price_rating_stars}>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                    <figure>
                      <Image src={star} alt="Звезда" />
                    </figure>
                  </div>
                  <p>
                    от <span>71 300</span> руб. / чел
                  </p>
                </div>
              </div>
            </CatalogCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection
