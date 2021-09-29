import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/404.module.css'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <Layout title="404 - Not Found">
      <div className={styles.notFoundBox}>
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          alt="logo"
          className={styles.logo}
        />
        <h1>Opps!</h1>
        <p>This page does not exist!</p>

        <button type="button" onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </Layout>
  )
}

export default NotFoundPage
