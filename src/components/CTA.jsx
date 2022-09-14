import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s get in contact!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Click on the <span className="text-gradient">"Get Started"</span> button and send me an email!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="mailto:cosmiinn97@gmail.com"><Button /></a>
    </div>
  </section>
);

export default CTA;
