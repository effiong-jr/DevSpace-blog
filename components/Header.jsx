import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Link href="/">
          <a className={styles.logoBox}>
            <Image src="/images/logo.png" height={40} width={40} alt="logo" />
            <span className={styles.logoText}>DevSpace</span>
          </a>
        </Link>
        <nav className={styles.navItems}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
