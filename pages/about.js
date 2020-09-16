import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Ohm Yoga: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>

        <div className={styles.grid}>
          <a
            href="https://yogawithpaz.com/"
            className={styles.card}
            target="_new"
          >
            <h3>About</h3>
            <p>
              In 1982, I started a formal practice of meditation. This opened a
              door into the study of Vedanta Philosophy, Yoga and many wellness
              practices. I taught my first Hatha Yoga class in 1985 at Seton
              Hall University.
            </p>
          </a>

          <a
            href="https://yogawithpaz.com/"
            className={styles.card}
            target="_new"
          >
            <h3>About</h3>
            <p>
              In 1986 I moved to Washington DC and attended classes at yoga
              centers throughout town. I became a participant and devotee at The
              Self Revelation Church of Absolute Monism and immersing deeper
              into the studies and practices. The weekly service and programs
              highlighted Advaita Vedanta, Kriya Yoga and Universality of Soul.
              I performed Karma Yoga by way of working on the grounds and was a
              member of the Bell Choir.
            </p>
          </a>

          <a
            href="https://www.ramdass.org/"
            className={styles.card}
            target="_new"
          >
            <h3>About</h3>
            <p>
              In 2015, I moved back to New Jersey and discovered many yoga
              studios close to home. I completed the 200 Hour Yoga Teacher
              Training program 2017 and immediately began teaching. My teaching
              and practice interests are varied; I focus on beginning students
              and those with special needs. I am inspired by the writings of
              Swami Kamalananda ("Srimati Kamala"), Swami Premananda, Swami
              Satchidananda, Ram Dass, BKS Iyengar, and Pema Chodron.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
