import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <>
      <main className={styles.main}>
        <section className={styles.container}>
              <div className={styles.container_title}>
                <div className={styles.title_content}> 
                <h1 className={styles.title_text} >Hi. Im <span >Mohammad</span></h1>
                      <p className={styles.pitch}>I am ambitious, creative, motivated and ready to reach the heights as a front-end developer
                      . With full observance of all these qualities, 
                      I can offer a special approach to work with projects.</p>
                          <h2 className={styles.about}>Front-end web <span>developer</span> </h2>
                          <h3 className={styles.about}>UI/UX <span>designer</span> </h3>
                          <h4 className={styles.about}>Programmer and <span>friendly guy</span> </h4>
                </div>
                <div className={styles.buttons} >
                      <a className={styles.btn} target="_blank" href="contact.html">
                          Contact me
                      </a>
                    </div>
              </div>
          </section>
          
      </main>
    </>
  );
}
