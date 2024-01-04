import styles from "./TeamSection.module.scss"
import personPhoto from "/public/images/person-photo.webp"
import ImageCard from "@/components/ui/ImageCard/ImageCard"

const TeamSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section_title">
          <span>Наши эксперты,</span> которые помогут организовать путешествие
        </h2>
        <div className={styles.team_grid}>
          <ImageCard
            src={personPhoto}
            title="Елена"
            description="Отправила на отдых более 1000 семей"
            number="+7(950)215-42-25"
            numberLink="+79502154225"
          />
          <ImageCard
            src={personPhoto}
            title="Елена"
            description="Отправила на отдых более 1000 семей"
            number="+7(950)215-42-25"
            numberLink="+79502154225"
          />
          <ImageCard
            src={personPhoto}
            title="Елена"
            description="Отправила на отдых более 1000 семей"
            number="+7(950)215-42-25"
            numberLink="+79502154225"
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
