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
          <h3>The Early Days</h3>
          <p>
            In 1982, I started a formal practice of meditation, a study of
            Vedanta Philosophy and a Hatha Yoga practice. I taught my first
            Hatha Yoga class in 1985 at Seton Hall University.
          </p>

          <h3>The Middle Years</h3>
          <p>
            In 1986 I moved to the Washington DC area and attended regular hatha
            yoga classes. I became a participant at The Self Revelation Church
            of Absolute Monism. The weekly service and programs highlighted
            Advaita Vedanta, Kriya Yoga and Universality of Soul. I practiced
            Karma Yoga working on the grounds and was a member of the Bell
            Choir.
          </p>

          <h3>Be Here Now</h3>
          <p>
            In 2015, I moved back to New Jersey and discovered many yoga studios
            close to home. I completed the 200 Hour Yoga Teacher Training
            program 2017 and immediately began teaching. My teaching and
            practice interests are varied; I enjoy working with beginning
            students and those with special needs. I am inspired by the writings
            of Swami Kamalananda ("Srimati Kamala"), Swami Premananda, Swami
            Satchidananda, Ram Dass, BKS Iyengar, and Pema Chodron.
          </p>
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
