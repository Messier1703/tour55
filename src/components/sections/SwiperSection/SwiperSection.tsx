"use client"
import Image from "next/image"
import styles from "./SwiperSection.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import photo1 from "/public/images/resort-photo.webp"
import photo2 from "/public/images/resort-photo.webp"

const SwiperSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section_title">
          <span>Получите подборку</span>туров под ваш бюджет
        </h2>
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={10}
        slidesPerView={1.2}
        direction="horizontal"
        loop
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
    </section>
  )
}

export default SwiperSection
