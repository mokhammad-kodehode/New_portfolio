import Image from "next/image";
import styles from "./styles.module.css";

export default function About() {
  return (
      <>
      <main className={styles.main}>
        <section className={styles.container}>
              <div className={styles.container_title}>
                   <h1 className={styles.title_text}>About Me</h1>
                    <p>My name is Mohammad, I am a front-end developer. 
                            Since the beginning of 2023, I have started a Kodehode course focused on the 
                            front-end developer. In a short time, I was able to master everything that is
                            needed for full-stack development and realized that I had found my calling.
                        </p>
                        <p>
                            I used to be an entrepreneur, I had several successful
                            businesses and projects in the service and entertainment sector. 
                            Thanks to this, I was able to gain experience in commerce and marketing.
                            Now I have a huge desire to combine all my skills and create something big.
                        </p>
                        <p>
                            About myself I can say that I am honest, responsible, motivated. I can be competitive at work
                        </p>
              </div>
          </section>
          
      </main>
    </>
  );
}
