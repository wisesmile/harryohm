import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Ohm Yoga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://harryohm.vercel.app/">Harry Ohm!</a>
        </h1>

        <p className={styles.description}>Another Yoga Teacher Website</p>

        <div className={styles.grid}>
          <a href="https://yogawithpaz.com/" className={styles.card}>
            <h3>Old Site #1</h3>
            <p>An earlier site.</p>
          </a>

          <a href="https://www.ramdass.org/" className={styles.card}>
            <h3>Ram Dass </h3>
            <p>Ramdass.org </p>
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
