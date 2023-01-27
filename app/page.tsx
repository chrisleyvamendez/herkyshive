import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main }>
      <div className={styles.title}>
        <h1>findahornet</h1>
        <p className={inter.className}>Unofficial Sac State Roommate Search</p>
      </div>

        <div className={styles.displayCards}>
          <div className={styles.cardz}>
            <h2>@csus emails only</h2>
          </div>

          <div className={styles.cardz}>
            <h2>responsive & fast</h2>
          </div>

          <div className={styles.cardz}>
            <h2>filtered (better)</h2>
          </div>

        </div>


        <div className={styles.postCount}>
          <p className={styles.description}>currently <span>2</span> posts</p>
        </div>
      

      <button className={styles.button}>
        <Link href={'/dashboard'}>Sign-In</Link>
      </button>
    </main>
  )
}
