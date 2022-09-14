import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, index }) => (
  <div className={`flex flex-row p-6 m-2 rounded-[20px] feature-card`}>
    <div className={`flex flex-col w-[50px] h-[50px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[75%] h-[75%] object-contain" />
      <h4 className="font-poppins font-semibold text-white text-[15px] leading-[23.4px] mb-1">
        {title}
      </h4>
    </div>
    </div>
);

const Skills = () =>  (
  <section id="skills" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        My current <br className="sm:block hidden" /> skills
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I was always the type of person that enjoyed spending time on PC. 
        So, I decided to pick up a good set of skills that can help me achieve my goals while at the same time giving me the ability to help other people achieve theirs.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-row flex-wrap`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Skills;
