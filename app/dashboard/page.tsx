import styles from 'styles/dash.module.scss'
import Link from 'next/link'


export default function Dash() {

    const name = "Joey"
    return (
        <main className={styles.main}>
            <section className={styles.sectionA}>
                <div className={styles.welcome}>
                    <h2>👋 Welcome {name}</h2>
                    <div className={styles.disclaimer}>
                        <p>thank you for signing up and checking out findahornet, this is a personal project of mine.
                            please let me know if there are any issues or bugs with the site, feel free to email me
                        </p>

                    </div>

                    <div className={styles.postButton}>
                        <Link href={'dashboard/create'}>Post</Link>
                    </div>
                </div>

                <div className={styles.titleDisplay}>
                    <h2>🏠 Rooms Available</h2>
                    <div className={styles.display}>

                    </div>
                    
                </div>

                <div className={styles.titleDisplay}>
                    <h2>🏠 Looking</h2>
                    <div className={styles.display}>

                    </div>
                    
                </div>

            </section>
        </main>
    )
}