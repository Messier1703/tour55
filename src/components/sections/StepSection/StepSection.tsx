import styles from "./StepSection.module.scss"
import photo from "/public/images/resort-photo.webp"
import ImageCard from "@/components/ui/ImageCard/ImageCard"

const StepSection = () => {
  return (
    <section className={styles.steps}>
      <div className="container">
        <h2 className="section_title">
          Легкий путь к <span>идеальному отдыху:</span>
        </h2>
        <div className={styles.steps_grid}>
          <ImageCard
            title="Пройдите тест"
            description="Ответьте на несколько простых вопросов и выберите удобный способ для получения подборки."
            src={photo}
          />
          <ImageCard
            title="Пройдите тест"
            description="Ответьте на несколько простых вопросов и выберите удобный способ для получения подборки."
            src={photo}
          />
          <ImageCard
            title="Пройдите тест"
            description="Ответьте на несколько простых вопросов и выберите удобный способ для получения подборки."
            src={photo}
          />
        </div>
      </div>
    </section>
  )
}

export default StepSection
