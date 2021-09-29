import Layout from '@/components/Layout'
import styles from '@/styles/about.module.css'

const AboutPage = () => {
  return (
    <Layout title="About DevSpace">
      <h1 className={styles.title}>About Page</h1>

      <div className={styles.card}>
        <h3>DevSpace Blog</h3>

        <p className={styles.cardText}>
          This is a blog built with Next.js and Markdown
        </p>

        <p className={styles.version}>Version 1.0.0</p>
      </div>
    </Layout>
  )
}

export default AboutPage
