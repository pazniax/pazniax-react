import styles from "../style";
import Button from "../components/Button";


const Description = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Выдающиеся <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Архитекторы</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Беларуси.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Белорусская архитектура – это коллективная многовековая работа и гордость народов, в тот или иной исторический промежуток населявших территорию страны.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <figure>
        <img src="src/assets/random/1.jpg" />
        <figcaption className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ляшук Олег Васильевич

        </figcaption>
        </figure>
      </div>

    </section>
  )
}

export default Description