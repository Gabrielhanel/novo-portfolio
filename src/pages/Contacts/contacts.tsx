import styles from "./contacts.module.css";
import emailImg from "../../assets/icons/email.png";
import githubImg from "../../assets/icons/github.png";
import linkedinImg from "../../assets/icons/linkedin.png";
import whatsappImg from "../../assets/icons/whatsapp.png";
export default function Contacts() {
  return (
    <div>
      <div className="areaTitulo">
        <h1 className="titulo">CONTATE-ME</h1>
      </div>
      <div className={styles.areaIcons}>
        <div className={styles.icon}>
          <a href="mailto:ghanel527@gmail.com" target="_blank"
          rel="noopener noreferrer">
            <img src={emailImg} alt="Email" className={styles.iconImg} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://github.com/Gabrielhanel"  target="_blank"
          rel="noopener noreferrer">
            <img src={githubImg} alt="Github" className={styles.iconImg} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.linkedin.com/in/gabriel-hanel/" target="_blank"
          rel="noopener noreferrer">
            <img src={linkedinImg} alt="Linkedin" className={styles.iconImg} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="http://wa.me/+5554996454042" target="_blank"
          rel="noopener noreferrer">
            <img src={whatsappImg} alt="Whatsapp" className={styles.iconImg} />
          </a>
        </div>
      </div>
    </div>
  );
}
