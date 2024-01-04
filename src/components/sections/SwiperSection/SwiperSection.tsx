"use client"
import Image from "next/image"
import styles from "./SwiperSection.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/scss/scrollbar"
import "swiper/scss/navigation"
import photo1 from "/public/images/resort-photo.webp"
import photo2 from "/public/images/resort-photo.webp"
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton"

const SwiperSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section_title">
          <span>Получите подборку</span>туров под ваш бюджет
        </h2>
        <Swiper
          className={styles.swiper}
          spaceBetween={10}
          slidesPerView={1.2}
          direction="horizontal"
          loop
          navigation
          breakpoints={{
            550: {
              slidesPerView: 1.5,
            },
          }}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <figure>
              <Image src={photo1} alt="Фото" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <figure>
              <Image src={photo2} alt="Фото" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <figure>
              <Image src={photo2} alt="Фото" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <figure>
              <Image src={photo2} alt="Фото" />
            </figure>
          </SwiperSlide>
        </Swiper>
        <div className={styles.buttons}>
          <PrimaryButton type="primary">Получить</PrimaryButton>
          <PrimaryButton type="default">задать вопрос</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default SwiperSection
