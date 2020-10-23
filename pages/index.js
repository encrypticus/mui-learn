import { Container } from '@material-ui/core';
import MainNav from '../components/main-nav';
import { MainHead } from '../components/Head/mainHead';
import styles from '../styles/Home.module.css';


export default function Home() {

  return (
    <>
      <MainHead/>
      <MainNav/>
      <div className={styles.container}>
        <main className={styles.main}>
          index page
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
    </>
  )
}
