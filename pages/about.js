import Head from 'next/head';
import MainNav from '../components/main-nav';
import {MainHead} from '../components/Head/mainHead';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <MainHead/>

      <MainNav/>

      <main className={styles.main}>
        about page
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
        </a>
      </footer>
    </div>
  )
}
